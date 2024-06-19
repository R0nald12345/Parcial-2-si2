

const Lista_DocenteFacu = ({ docenteFacuObject }) => {
  const usuario = docenteFacuObject.usuario;
  const facultad = docenteFacuObject.facultad;

  return (
<tr className="odd:bg-gray-50 hover:bg-gray-100">
      <td className="px-3 py-2 border-b border-gray-200">{usuario.nombre}</td>
      <td className="px-3 py-2 border-b border-gray-200">
        {usuario.apellidoPaterno +' '+ usuario.apellidoMaterno}
      </td>
      <td className="px-3 py-2 border-b border-gray-200">{usuario.email}</td>
      <td className="px-3 py-2 border-b border-gray-200">{usuario.telefono}</td>
      <td className="px-3 py-2 border-b border-gray-200">{facultad.nombre}</td>
      <td className="flex justify-center">
    
            <button
              className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
         
            >
              Designar
            </button>

      </td>
    </tr>
  );
}

export default Lista_DocenteFacu;
