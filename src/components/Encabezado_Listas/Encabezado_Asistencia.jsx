import React, { useState, useEffect } from 'react';
import Lista_Asistencia from '../Listas/Lista_Asistencia';
import { getDatoAsistencia } from '../../api/apiService';
import axios from 'axios';

const Encabezado_Asistencia = ({ selectedOption, startDate, endDate, filtroAsistio, filtroAtraso }) => {
  const [datosAsistencia, setDatosAsistencia] = useState([]);
  const [filteredDatosAsistencia, setFilteredDatosAsistencia] = useState([]);

  useEffect(() => {
    const fetchingListaAsistencia = async () => {
      try {
        const response = await getDatoAsistencia();
        setDatosAsistencia(response);
      } catch (error) {
        console.log("Error en Componente ListaGeneral fetchingListaAsistencia", error);
      }
    };
    fetchingListaAsistencia();
  }, []);

  useEffect(() => {
    const fetchMateriaGrupo = async (idMateriaGrupo) => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const accessToken = localStorage.getItem('token');
        const response = await axios.get(`${baseUrl}/api/materiaGrupo/${idMateriaGrupo}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        return response.data.docenteEnsena.materia.id_area;
      } catch (error) {
        console.error("Error fetching materiaGrupo data", error);
        return null;
      }
    };

    const filterDatosAsistencia = async () => {
      let filtered = datosAsistencia;

      if (selectedOption) {
        filtered = [];
        for (const dato of datosAsistencia) {
          const idArea = await fetchMateriaGrupo(dato.id_materiaGrupo);
          if (idArea === parseInt(selectedOption, 10)) {
            filtered.push(dato);
          }
        }
      }

      if (startDate) {
        filtered = filtered.filter(dato => new Date(dato.fecha) >= new Date(startDate));
      }

      if (endDate) {
        filtered = filtered.filter(dato => new Date(dato.fecha) <= new Date(endDate));
      }

      if (filtroAsistio) {
        filtered = filtered.filter(dato => String(dato.asistio) === filtroAsistio);
      }

      if (filtroAtraso) {
        filtered = filtered.filter(dato => String(dato.atraso) === filtroAtraso);
      }

      setFilteredDatosAsistencia(filtered);
    };

    filterDatosAsistencia();
  }, [selectedOption, startDate, endDate, filtroAsistio, filtroAtraso, datosAsistencia]);

  return (
    <table id="tablaAsistencia" className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Docente</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sigla</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Área</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aula</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grupo</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horario Clase</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horario Asistencia</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Falta</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Atraso</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrar</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {filteredDatosAsistencia.map((element) => (
          <Lista_Asistencia
            key={element.id}
            id={element.id}
            fecha={element.fecha}
            asistio={element.asistio}
            atraso={element.atraso}
            idMateriaGrupo={element.id_materiaGrupo}
            hora={element.hora}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Encabezado_Asistencia;
