import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { getDatoAreaId, getDatoMateriaGrupoId } from "../../api/apiService";

const Lista_Asistencia = ({ fecha, asistio, atraso, idMateriaGrupo, hora }) => {
  const [materiaGrupoId, setMateriaGrupoId] = useState(null);
  const [materiaAreaId, setMateriaAreaId] = useState(null);
  const [idArea, setIdArea] = useState(null);

  const getHora = () => {
    return hora === null ? "No hay hora" : hora;
  };

  const getAsistio = () => {
    return asistio ? "Si" : "No";
  };

  const getAtraso = () => {
    return atraso ? "Si" : "No";
  };

  useEffect(() => {
    const fetchingListaMateriaGrupo = async () => {
      try {
        const response = await getDatoMateriaGrupoId(idMateriaGrupo);
        setMateriaGrupoId(response);
        setIdArea(response.docenteEnsena.materia.id_area);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneral fetchingListaMateriaGrupo",
          error
        );
      }
    };
    fetchingListaMateriaGrupo();
  }, [idMateriaGrupo]);

  useEffect(() => {
    if (idArea) {
      const fetchingArea = async () => {
        try {
          const response = await getDatoAreaId(idArea);
          setMateriaAreaId(response);
        } catch (error) {
          console.log("Error en Componente ListaGeneral fetchingArea", error);
        }
      };
      fetchingArea();
    }
  }, [idArea]);

  if (!materiaGrupoId || !materiaAreaId) {
    return null; // or a loading indicator
  }

  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
        {materiaGrupoId.docenteEnsena.docenteFacultad.usuario.nombre}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        {materiaGrupoId.docenteEnsena.materia.siglas}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        {materiaAreaId.nombre}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        {materiaGrupoId.aula.numero}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        {materiaGrupoId.id_grupo.sigla}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        {materiaGrupoId.id_horario.horaInicio} - {materiaGrupoId.id_horario.horaFin}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        {fecha}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        {getHora()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        {getAsistio()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        {getAtraso()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
        <RiDeleteBin5Line className="text-3xl text-red-700" />
      </td>
    </tr>
  );
};

export default Lista_Asistencia;
