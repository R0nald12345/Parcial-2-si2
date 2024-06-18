import React, { useState, useEffect } from "react";
import Lista_Facultades from "../../Listas/Facultades/Lista_Facultades";
import { getDatoGeneralFacultades } from "../../../api/apiService";

const Encabezado_Facultad = () => {

  const [datosListaFacultades, setdatosListaFacultades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchingListaFacultad = async () => {
      try {
        const response = await getDatoGeneralFacultades();
        if (response.error) {
          setError(response.error);
        } else {
          setdatosListaFacultades(response);
        }
      } catch (error) {
        console.log("Error en Componente ListaGeneral fetchingListaFacultad", error);
        setError("Error al obtener los datos");
      } finally {
        setLoading(false);
      }
    };
    fetchingListaFacultad();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <main className="w-[65%] flex-col justify-center ">
       
        <section className="w-full">
          <ul className="w-full flex bg-white gap-1 mb-3 rounded-xl shadow-lg">
            <li className="font-semibold text-start w-[75%] px-3 py-2 " >
              Nombre
            </li>
            <li className="font-semibold text-center w-[10%] px-3 py-2 ">
              Sigla
            </li>
            <li className="font-semibold text-center w-[15%] px-2 py-2 ">
              Acciones
            </li>
          </ul>
        </section>

        <section className="w-full">
          {datosListaFacultades.map((element) => (
            <Lista_Facultades
              key={element.id}
              id={element.id}
              nombre={element.nombre}
              sigla={element.sigla}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Encabezado_Facultad;
