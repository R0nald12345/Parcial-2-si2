import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; 
import { crearDocenteEnsena, crearDocenteFacultades, getMaterias } from '../../api/docenteFacultades';
import { DocenteEnsenaDTO} from '../../dto/Docente_ensena_dto.js';

const Modal_crear_docente_facultad = ({ open, onClose, usuario, facultad, id_docenteFac}) => {
  const [materia, setMateria] = useState([]);
  const [gestion, setGestion] = useState(new Date().getFullYear());
  const [materiaId, setMateriaId] = useState(0);

  useEffect(() => {
    const getResults = async () => {
      try {
        setMateria(await getMaterias());
      } catch (error) {
        console.log(error);
      }
    };

    getResults();
  }, []);

  const handleSeleccionMateria = (e) => {
    setMateriaId(e.target.value);
    console.log(materiaId);
  };

  const handleNuevoMantenimiento = async () => {
    try {
      const data = await crearDocenteEnsena(gestion,id_docenteFac,materiaId);
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Creado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      onClose(); // Cierra el modal después de crear el mantenimiento
    } catch (error) {
      console.log("Error en el Componente Creado" + error);
    }
  };

  if (!open) return null; 

return (
   
  <>
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
      <form
        className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/2 -translate-y-1/2"
        onSubmit={(e) => {
          e.preventDefault();
          handleNuevoMantenimiento();
        }}
      >
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <h2 className="text-3xl font-bold text-center">Asignar materias a un docente</h2>
        <div className="mt-5">
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="font-semibold text-lg">Datos del usuario</h3>
            <p>Facultad: {facultad.nombre}</p>
            <p>Nombre: {usuario.nombre}</p>
            <p>Apellido Paterno: {usuario.apellidoPaterno}</p>
            <p>Apellido Materno: {usuario.apellidoMaterno}</p>
            <p>Email: {usuario.email}</p>
            <p>Teléfono: {usuario.telefono}</p>
          
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <h3 className="font-semibold">Gestión</h3>
              <input
                className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
                type="number"
                value={gestion}
                onChange={(e) => setGestion(e.target.value)}
                min={new Date().getFullYear()}
              />
            </div>
            <div>
              <h3 className="font-semibold">Materia</h3>
              <select
        className="rounded-md border-2 border-gray-400 w-full p-2 mt-2 outline-none"
        value={materiaId}
        onChange={handleSeleccionMateria}
      >
        {materia.map((materiaItem) => (
          <option key={materiaItem.id} value={materiaItem.id}>
            {materiaItem.nombre}
          </option>
        ))}
      </select>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
            onSubmit={()=>{
              handleNuevoMantenimiento();
            }}
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  </>
);

};

export default Modal_crear_docente_facultad;