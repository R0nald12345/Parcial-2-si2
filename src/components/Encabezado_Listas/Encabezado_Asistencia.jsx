import React, { useState, useEffect, useMemo } from 'react';
import Lista_Asistencia from '../Listas/Lista_Asistencia';
import { getDatoAsistencia, getDatoMateriaGrupoId } from '../../api/apiService';
import { useDebounce } from '../../customHooks/useDebounce';

const Encabezado_Asistencia = ({ selectedOption, startDate, endDate, filtroAsistio, filtroAtraso, filtroNombre }) => {
  const [datosAsistencia, setDatosAsistencia] = useState([]);
  const [materiaGrupoMap, setMateriaGrupoMap] = useState({});

  const debouncedFiltroNombre = useDebounce(filtroNombre, 300);

  useEffect(() => {
    const fetchingListaAsistencia = async () => {
      try {
        const response = await getDatoAsistencia();
        setDatosAsistencia(response);

        const materiaGrupoIds = [...new Set(response.map(dato => dato.id_materiaGrupo))];
        const materiaGrupoPromises = materiaGrupoIds.map(id => getDatoMateriaGrupoId(id));
        const materiaGrupoResponses = await Promise.all(materiaGrupoPromises);
        
        const newMateriaGrupoMap = {};
        materiaGrupoResponses.forEach(response => {
          newMateriaGrupoMap[response.id] = response;
        });
        setMateriaGrupoMap(newMateriaGrupoMap);
      } catch (error) {
        console.log("Error en Componente ListaGeneral fetchingListaAsistencia", error);
      }
    };
    fetchingListaAsistencia();
  }, []);

  const filteredDatosAsistencia = useMemo(() => {
    let filtered = datosAsistencia;

    if (selectedOption) {
      filtered = filtered.filter(dato => materiaGrupoMap[dato.id_materiaGrupo]?.docenteEnsena.materia.id_area === parseInt(selectedOption, 10));
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

    if (debouncedFiltroNombre) {
      filtered = filtered.filter(dato => 
        materiaGrupoMap[dato.id_materiaGrupo]?.docenteEnsena.docenteFacultad.usuario.nombre.toLowerCase().includes(debouncedFiltroNombre.toLowerCase())
      );
    }

    return filtered;
  }, [datosAsistencia, selectedOption, startDate, endDate, filtroAsistio, filtroAtraso, debouncedFiltroNombre, materiaGrupoMap]);

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
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {filteredDatosAsistencia.map((element) => (
          <Lista_Asistencia
            key={element.id}
            id={element.id}
            fecha={element.fecha}
            asistio={element.falta}
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
