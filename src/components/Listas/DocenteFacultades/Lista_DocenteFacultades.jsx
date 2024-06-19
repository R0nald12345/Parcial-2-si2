import { RiDeleteBin5Line } from "react-icons/ri";
import Modal_crear_docente_facultad from "../../modal/Modal_crear_docente_facultad";
import { useState } from "react";


const Lista_DocenteFacu = ({ docenteFacuObject }) => {
  const usuario = docenteFacuObject.usuario;
  const [openModal, setOpenModal] = useState(false);
  const facultad = docenteFacuObject.facultad;

  return (
    <>      
    <Modal_crear_docente_facultad

            open={openModal}
        onClose={() => setOpenModal(false)}
      facultad={facultad} usuario={usuario} id_docenteFac={docenteFacuObject.id}
    />

      <tr className="odd:bg-gray-50 hover:bg-gray-100">
        <td className="px-3 py-2 border-b border-gray-200">{usuario.nombre}</td>
        <td className="px-3 py-2 border-b border-gray-200">
          {usuario.apellidoPaterno + ' ' + usuario.apellidoMaterno}
        </td>
        <td className="px-3 py-2 border-b border-gray-200">{usuario.email}</td>
        <td className="px-3 py-2 border-b border-gray-200">{usuario.telefono}</td>
        <td className="px-3 py-2 border-b border-gray-200">{facultad.nombre}</td>
        <td className="flex justify-center space-x-3 items-center mt-4">
  <button
    className="bg-green-600 hover:bg-green-700 font-semibold text-white py-2 px-5 rounded-xl"
    onClick={() => setOpenModal(!openModal)}
  >
    Designar
  </button>
  <RiDeleteBin5Line
    className="text-3xl text-red-700 cursor-pointer"
  />
</td>


      </tr>
    </>
  );
}

export default Lista_DocenteFacu;
