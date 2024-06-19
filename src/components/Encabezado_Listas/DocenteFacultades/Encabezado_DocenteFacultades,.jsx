import { useState, useEffect } from 'react'
import { getDatoGeneralDocenteFacultad } from '../../../api/docenteFacultades.js';
import Lista_DocenteFacu from '../../Listas/DocenteFacultades/Lista_DocenteFacultades.jsx';

const Encabezado_DocenteFacultades = () => {
  const [datosListaDocenteFacu, setDatosListaDocenteFacu] = useState([]);


  useEffect(() => {
    const fetchingListaDocenteFacu = async () => {
      try {
        const response = await getDatoGeneralDocenteFacultad();
        setDatosListaDocenteFacu(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneral fetchingListaFacultad",
          error
        );
      }
    };
    fetchingListaDocenteFacu();
  }, []);



  return (
    <main className=" mx-auto w-[90%] flex-col justify-center">
      <table className="w-full bg-white shadow-lg rounded-xl">
        <thead className="bg-gray-100">
          <tr>
            <th className="font-semibold px-3 py-2 w-[10%] border-b-2 border-gray-200">Nombre</th>
            <th className="font-semibold px-3 py-2 w-[20%] border-b-2 border-gray-200">Apellido</th>
            <th className="font-semibold px-3 py-2 w-[18%] border-b-2 border-gray-200">Email</th>
            <th className="font-semibold px-3 py-2 w-[10%] border-b-2 border-gray-200">Telefono</th>
            <th className="font-semibold px-3 py-2 w-[10%] border-b-2 border-gray-200">Facultad</th>
            <th className="font-semibold px-3 py-2 w-[25%] border-b-2 border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datosListaDocenteFacu.map((element) => (
            <Lista_DocenteFacu
              docenteFacuObject={element}
              key={element.id} // Make sure to use a unique key for each row
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
export default Encabezado_DocenteFacultades