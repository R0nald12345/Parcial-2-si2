import { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { getDatoAreaId, getDatoMateriaGrupoId } from "../../api/apiService";

const Lista_Asistencia = ({ fecha, asistio, atraso, idMateriaGrupo,hora }) => {
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
    <>
      <ul className="w-full flex gap-1 rounded-xl mb-3 bg-white shadow-xl">
        <li className="font-semibold w-[10%] px-2 py-2 text-center">
          {materiaGrupoId.docenteEnsena.docenteFacultad.usuario.nombre}
        </li>
       
        <li className="font-semibold w-[8%] px-2 py-2 text-center">
          {materiaGrupoId.docenteEnsena.materia.siglas}
        </li>
        <li className="font-semibold w-[12%] px-2 py-2 text-center">
          {materiaAreaId.nombre}
        </li>
        <li className="font-semibold w-[5%] px-2 py-2 text-center">
          {materiaGrupoId.aula.numero}
        </li>
        <li className="font-semibold w-[5%] px-2 py-2 text-center">
          {materiaGrupoId.id_grupo.sigla}
        </li>
        <li className="font-semibold w-[18%] px-2 py-2 text-center">
          {materiaGrupoId.id_horario.horaInicio} - {materiaGrupoId.id_horario.horaFin}
        </li>
        <li className="font-semibold w-[15%] px-2 py-2 text-center">
          {fecha}
        </li>
        <li className="font-semibold w-[12%] px-2 py-2 text-center">
          {getHora()}
        </li>
        <li className="font-semibold w-[5%] px-2 py-2 text-center">
          {getAsistio()}
        </li>
        <li className="font-semibold w-[5%] px-2 py-2 text-center">
          {getAtraso()}
        </li>
        <li className="w-[5%] flex justify-between items-center ">
          <RiDeleteBin5Line className="text-3xl text-red-700" />
        </li>
      </ul>
    </>
  );
};

export default Lista_Asistencia;
