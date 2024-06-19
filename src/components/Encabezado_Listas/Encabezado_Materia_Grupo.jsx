import {useState,useEffect} from 'react'
import { getDatoGeneralMateriaGrupo } from '../../api/apiService';
import Lista_Materia_Grupo from '../Listas/Lista_Materia_Grupo';

const Encabezado_Materia_Grupo = () => {
    const [listaMateriaGrupo, setListaMateriaGrupo] = useState([]);
    const[listaMateria, setListaMateria] = useState([]);
    const[listaFacultad, setListaFacultad] = useState([]);
  
  
    useEffect(() => {
      const fetchingMateriaGrupo = async () => {
        try {
          const response = await getDatoGeneralMateriaGrupo();
          setListaMateriaGrupo(response);
        } catch (error) {
          console.log(
            "Error en Componente ListaGeneral fetchingMateriaGrupo",
            error
          );
        }
      };
      fetchingMateriaGrupo();
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
  
  
          {/* <section className="w-full">
            {listaMateriaGrupo.map((element) => (
              <Lista_Materia_Grupo
                key = {element.id}
                nombre = {}
                telefono = {}
                facultad = {}
              />
            ))}
          </section> */}
        </main>
    
      </>
    );
  };

export default Encabezado_Materia_Grupo;