import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatoGeneralFacultades } from "../../api/apiService";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Encabezado_Facultad from "../../components/Encabezado_Listas/Facultades/Encabezado_Facultad";

const ListaGeneralFacultades = () => {
  const navigate = useNavigate();

  const [datosUnidadEducativa, setDatosUnidadEducativa] = useState([]);
  const [turno, setTurno] = useState([]);

  const [turnoSeleccionado, setTurnoSeleccionado] = useState("");

  useEffect(() => {
    const fetchingListaFacultad = async () => {
      try {
        const response = await getDatoGeneralFacultades();
        setDatosUnidadEducativa(response);
      } catch (error) {
        console.log(
          "Error en Componente ListaGeneral fetchingListaFacultad",
          error
        );
      }
    };
    fetchingListaFacultad();
  }, []);

  const changeRutaNuevoFormulario = () => {
    navigate("/unidadeducativa/agregarnuevo");
  };

  const changeFormDetails = () => {
    navigate("/unidadeducativa/detalles");
  };

  const handleTurno = (event) => {
    setTurnoSeleccionado(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Parte Superrior */}
      <section className="w-[65%] flex-col justify-center p-2 mb-2">
        <div className="bg-white rounded-xl py-2">
          <h3 className="text-3xl text-center font-semibold">Listado de Facultades</h3>
        </div>

        <section className="w-full flex justify-between mt-5">

          <section className=" flex items-center justify-end px-3 gap-3">
            <p className="font-new-font font-new-bold text-white">Nombre</p>
            <div className="w-full flex bg-gray-300 border border-black rounded-xl px-2">
              <FaMagnifyingGlass className="mt-2" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full font-semibold  rounded-xl py-1 bg-gray-300  px-1 outline-none"
              />
            </div>
          </section>



          <section className=" flex gap-12 pl-2 pr-3 ">
            {/* Boton */}
            <div className="flex col-span-1">
              <button
                // onClick={changeRutaNuevoFormulario}
                className="text-white font-new-font font-new-bold bg-yellow-600 rounded-lg py-3 px-2"
              >
                Agregar Nuevo
              </button>
            </div>
          </section>


        </section>
      </section>
        
        
      <Encabezado_Facultad />
    </div>
  );
};

export default ListaGeneralFacultades;
