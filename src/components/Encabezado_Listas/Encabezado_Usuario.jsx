import {useState,useEffect} from 'react'
import Lista_Usuario from '../Listas/Lista_Usuario';
import { getDatoGeneralUsuarios } from '../../api/apiService';

const Encabezado_Usuario = () => {
    const [datosListaUsuario, setDatosListaUsuario] = useState([]);
    const [turno, setTurno] = useState([]);
  
  
    useEffect(() => {
      const fetchingListaUsuario = async () => {
        try {
          const response = await getDatoGeneralUsuarios();
          setDatosListaUsuario(response);
        } catch (error) {
          console.log(
            "Error en Componente ListaGeneral fetchingListaFacultad",
            error
          );
        }
      };
      fetchingListaUsuario();
    }, []);
  
  

    return (
      <>
        <main className="w-[90%] flex-col justify-center ">
         
          <section className="w-full">
            <ul className="flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
              
              <li className="font-semibold text-center w-[10%] px-3 py-2  " >
                Nombre
              </li>

              <li className="font-semibold text-center w-[20%] px-3 py-2 ">
                Apellido
              </li>

              <li className="font-semibold text-center w-[18%] px-3 py-2 ">
                Email
              </li>

              <li className="font-semibold text-center w-[10%] px-3 py-2 ">
                Telefono
              </li>

              <li className="font-semibold text-center w-[17%] px-3 py-2 ">
                Cargo
              </li>

              <li className="font-semibold text-center w-[25%]  py-2 ">
                Acciones
              </li>
            </ul>
          </section>
  
          <section className="w-full">
            {datosListaUsuario.map((element) => (
              <Lista_Usuario
                id={element.id}
                nombre={element.nombre}
                apellidoPaterno={element.apellidoPaterno}
                apellidoMaterno={element.apellidoMaterno}
                email={element.email}
                telefono={element.telefono}
                cargo={element.rol.cargo}
              />
            ))}
          </section>
        </main>
    
      </>
    );
  };
export default Encabezado_Usuario