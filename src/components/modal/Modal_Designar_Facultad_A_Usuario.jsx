import { useState, useEffect } from "react";
import { crearUsuariosFacultad } from "../../api/apiService";

const Modal_Designar_Facultad_A_Usuario = ({ id, open, onClose, nombre, apellidoPaterno, apellidoMaterno, cargo, opcionFacultad }) => {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
        <form className="fixed top-1/2 left-1/2 max-w-lg w-3/2 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/4 -translate-y-1/2">
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <h2 className="text-3xl font-bold text-center">Designar Docente a Facultad</h2>
          <div className="mt-2 flex justify-around">
            <div>
              <h3 className="font-semibold mt-2">Nombre Usuario</h3>
              <p className="pl-2">{nombre} {apellidoPaterno} {apellidoMaterno}</p>
              <h3 className="font-semibold mt-2">Cargo</h3>
              <p className="pl-2">{cargo}</p>
            </div>
            <div>
              <h3 className="mt-2 font-semibold">Seleccione la Facultad</h3>
              <select className="border-2 rounded-xl px-2">
                <option>Seleccione una Facultad</option>
                {opcionFacultad.map((facultad) => (
                  <option value={facultad.id} key={facultad.id}>{facultad.nombre}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl">
              Designar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal_Designar_Facultad_A_Usuario;
