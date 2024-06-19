import { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal_Designar_Facultad_A_Usuario from '../modal/Modal_Designar_Facultad_A_Usuario';
import { getDatoGeneralFacultades } from '../../api/apiService';

const Lista_Usuario = ({ id, nombre, apellidoPaterno, apellidoMaterno, email, telefono, cargo }) => {
  
  const [opcionFacultad, setOpcionFacultad] = useState([]);

  const [openModal, setOpenModal] = useState(false);



  useEffect(() => {
    const fetchingListaFacultad = async () => {
      try {
        const response = await getDatoGeneralFacultades();
        console.log(response);
        setOpcionFacultad(response);
      } catch (error) {
        console.log("Error en Componente ListaGeneral fetchingListaFacultad", error);
      }
    };
    fetchingListaFacultad();
  }, []);

  return (
    <>
      <Modal_Designar_Facultad_A_Usuario
        id={id}
        open={openModal}
        onClose={() => setOpenModal(false)}
        nombre={nombre}
        apellidoPaterno={apellidoPaterno}
        apellidoMaterno={apellidoMaterno}
        cargo={cargo}
        opcionFacultad={opcionFacultad}
      />

      <ul className="w-full flex gap-1 rounded-xl mb-3 bg-white shadow-xl">
        <li className="font-semibold w-[10%] px-2 py-2 text-center">
          {nombre}
        </li>
        <li className="font-semibold w-[20%] px-2 py-2 text-center">
          {apellidoPaterno} {apellidoMaterno}
        </li>
        <li className="font-semibold w-[18%] px-2 py-2 text-center">
          {email}
        </li>
        <li className="font-semibold w-[10%] px-2 py-2 text-center">
          {telefono}
        </li>
        <li className="font-semibold w-[17%] px-2 py-2 text-center">
          {cargo}
        </li>
        <li className="w-[25%] px-2">
          <div className='flex justify-around mt-2'>
            <button
              className='bg-green-700 hover:bg-green-900 rounded-xl text-white font-semibold px-2 cursor-pointer'
              onClick={() => setOpenModal(true)}
            >
              Agregar Facultad
            </button>
            <RiDeleteBin5Line
              className="text-3xl text-red-700 cursor-pointer"
              onClick={() => setOpenModal(!openModal)}
            />
          </div>
        </li>
      </ul>
    </>
  );
};

export default Lista_Usuario;
