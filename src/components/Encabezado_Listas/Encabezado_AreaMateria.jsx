import {useState,useEffect} from 'react'
import Lista_AreaMateria from '../Listas/Lista_AreaMateria';
import { getDatoGeneralArea } from '../../api/apiService';

const Encabezado_AreaMateria = () => {
    const [datosListaArea, setDatosListaArea] = useState([]);
    const [turno, setTurno] = useState([]);
  
  
    useEffect(() => {
      const fetchingListaAreaMateria = async () => {
        try {
          const response = await getDatoGeneralArea();
          setDatosListaArea(response);
        } catch (error) {
          console.log(
            "Error en Componente ListaGeneral fetchingListaFacultad",
            error
          );
        }
      };
      fetchingListaAreaMateria();
    }, []);
  
  
    console.log(datosListaArea);

    return (
      <>
        <main className="w-[45%] flex-col justify-center ">
         
          <section className="w-full">
            <ul className="flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
              <li className="font-semibold text-start w-[15%] px-3 py-2 " >
                Id
              </li>
              <li className="font-semibold text-center w-[35%] px-3 py-2 ">
                Nombre
              </li>
              <li className="font-semibold text-center w-[25%] px-3 py-2 ">
                Cantidad Materias
              </li>
              <li className="font-semibold text-center w-[25%] px-2 py-2 ">
                Acciones
              </li>
            </ul>
          </section>
  
          <section className="w-full">
            {datosListaArea.map((element) => (
              <Lista_AreaMateria
                id={element.id}
                nombre={element.nombre}
                materias={element.materias}
              />
            ))}
          </section>
        </main>
      </>
    );
  };

export default Encabezado_AreaMateria