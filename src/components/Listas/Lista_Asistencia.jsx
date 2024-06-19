import { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { getDatoAreaId, getDatoMateriaGrupoId } from "../../api/apiService";

const Lista_Asistencia = ({ fecha, asistio, atraso, idMateriaGrupo, hora }) => {
  const [materiaGrupoId, setMateriaGrupoId] = useState(null);
  const [materiaAreaId, setMateriaAreaId] = useState(null);
  const [idArea, setIdArea] = useState(null);

  const getHora = () => {
    if(hora === null){
      return "No hay hora";
    }else{
      return hora;
    }
  }

  const getAsistio = () => {
    return asistio ? "Sí" : "No";
  };

  const getAtraso = () => {
    return atraso ? "Sí" : "No";
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
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {materiaGrupoId.docenteEnsena.docenteFacultad.usuario.nombre}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {materiaGrupoId.docenteEnsena.materia.siglas}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {materiaAreaId.nombre}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {materiaGrupoId.aula.numero}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {materiaGrupoId.id_grupo.sigla}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {materiaGrupoId.id_horario.horaInicio} - {materiaGrupoId.id_horario.horaFin}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {fecha}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {getHora()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {getAsistio()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {getAtraso()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <RiDeleteBin5Line className="text-3xl text-red-700" />
      </td>
    </tr>
  );
};

export default Lista_Asistencia;
