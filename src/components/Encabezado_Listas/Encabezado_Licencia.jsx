import {useState,useEffect} from 'react'
import Lista_Licencia from '../Listas/Lista_Licencia';
import { getDatoGeneralLicencia } from '../../api/apiService';

const Encabezado_Licencia = () => {
    const [datosListaLicencia, setDatosListaLicencia] = useState([]);
    const [turno, setTurno] = useState([]);
  
  
    useEffect(() => {
      const fetchingListaLicencia = async () => {
        try {
          const response = await getDatoGeneralLicencia();
          setDatosListaLicencia(response);
        } catch (error) {
          console.log(
            "Error en Componente ListaGeneral fetchingListaFacultad",
            error
          );
        }
      };
      fetchingListaLicencia();
    }, []);
  
  

    return (
      <>
        <main className="w-[75%] flex-col justify-center ">
         
          <section className="w-full">
            <ul className="flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
              
              <li className="font-semibold text-center w-[25%] px-3 py-2" >
                Nombre
              </li>

              <li className="font-semibold text-center w-[45%] px-3 py-2">
                Motivo
              </li>

              <li className="font-semibold text-center w-[15%] px-3 py-2">
                Fecha
              </li>

              <li className="font-semibold text-center w-[15%] px-2 py-2">
                Acciones
              </li>
            </ul>
          </section>
  
          <section className="w-full">
            {datosListaLicencia.map((element) => (
              <Lista_Licencia
                id={element.id}
                nombre={element.nombre}
                motivo={element.motivo}
                fecha={element.fecha}
              />
            ))}
          </section>
        </main>
      </>
    );
  };

export default Encabezado_Licencia