// import {useState,useEffect} from 'react'
// import Lista_Licencia from '../Listas/Lista_Licencia';
// import { getDatoAsistencia } from '../../api/apiService';
// import Lista_Asistencia from '../Listas/Lista_Asistencia';

// const Encabezado_Asistencia = () => {
//     const [datosAsistencia, setDatosAsistencia] = useState([]);
   
  
  
//     useEffect(() => {
//       const fetchingListaAsistencia = async () => {
//         try {
//           const response = await getDatoAsistencia();
//           setDatosAsistencia(response);
//         } catch (error) {
//           console.log(
//             "Error en Componente ListaGeneral fetchingListaAsistencia",
//             error
//           );
//         }
//       };
//       fetchingListaAsistencia();
//     }, []);
  

//     console.log(datosAsistencia);

  

//     return (
//       <>
//         <main className="w-[95%] flex-col justify-center ">
         
//           <section className="w-full">
//             <ul className="flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
//               <li className="font-semibold text-start w-[20%] px-1 py-2 " >
//                 Docente
//               </li>
//               <li className="font-semibold text-start w-[8%] px-1 py-2 ">
//                 Sigla
//               </li>
//               <li className="font-semibold text-start w-[12%] px-1 py-2 ">
//                 Area
//               </li>
//               <li className="font-semibold text-start w-[5%] px-1 py-2 ">
//                 Aula
//               </li>
//               <li className="font-semibold text-center w-[5%] px-1 py-2 ">
//                 Grupo
//               </li>
//               <li className="font-semibold text-center w-[12%] px-1 py-2 ">
//                 Horarios
//               </li>
//               <li className="font-semibold text-center w-[15%] px-1 py-2 ">
//                 Fecha
//               </li>
//               <li className="font-semibold text-center w-[8%] px-1 py-2 ">
//                 Horario Asistencia
//               </li>
//               <li className="font-semibold text-center w-[5%] px-1 py-2 ">
//                 Falta
//               </li>
//               <li className="font-semibold text-center w-[5%] px-1 py-2 ">
//                 Atraso
//               </li>
//               <li className="font-semibold text-center w-[5%] px-1 py-2 ">
//                 Borrar
//               </li>
//             </ul>
//           </section>
  
//           <section className="w-full">
//             {datosAsistencia.map((element) => (


// export default Encabezado_Asistencia



import { useState, useEffect } from 'react';
import Lista_Asistencia from '../Listas/Lista_Asistencia';
import { getDatoAsistencia } from '../../api/apiService';

const Encabezado_Asistencia = () => {
    const [datosAsistencia, setDatosAsistencia] = useState([]);

    useEffect(() => {
      const fetchingListaAsistencia = async () => {
        try {
          const response = await getDatoAsistencia();
          console.log(response);
          setDatosAsistencia(response);
        } catch (error) {
          console.log(
            "Error en Componente ListaGeneral fetchingListaAsistencia",
            error
          );
        }
      };
      fetchingListaAsistencia();
    }, []);

    return (
      <>
        <main className="w-[95%] flex-col justify-center ">
          <section className="w-full">
            <ul className="flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
              <li className="font-semibold text-start w-[10%] px-1 py-2 ">
                Docente
              </li>
              <li className="font-semibold text-start w-[8%] px-1 py-2 ">
                Sigla
              </li>
              <li className="font-semibold text-start w-[12%] px-1 py-2 ">
                Area
              </li>

              <li className="font-semibold text-start w-[5%] px-1 py-2 ">
                Aula
              </li>
              <li className="font-semibold text-center w-[5%] px-1 py-2 ">
                Grupo
              </li>
              <li className="font-semibold text-center w-[18%] px-1 py-2 ">
                Horario Clase
              </li>

              <li className="font-semibold text-center w-[15%] px-1 py-2 ">
                Fecha
              </li>
              <li className="font-semibold text-center w-[12%] px-1 py-2 ">
                Horario Asistencia
              </li>
              <li className="font-semibold text-center w-[5%] px-1 py-2 ">
                Falta
              </li>

              <li className="font-semibold text-center w-[5%] px-1 py-2 ">
                Atraso
              </li>
              <li className="font-semibold text-center w-[5%] px-1 py-2 ">
                Borrar
              </li>
            </ul>
          </section>
  
          <section className="w-full">
            {datosAsistencia.map((element) => (
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
          </section>
        </main>
      </>
    );
  };

export default Encabezado_Asistencia;

