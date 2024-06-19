
import axios from "axios";
export const getDatoGeneralDocenteFacultad = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/docenteFacultades`;

    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data; // Asumiendo que los datos están en response.data
  } catch (error) {
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralDocenteFacultad', error.message);
    return { error: 'Error al obtener los datos' };
  }
};

export const crearDocenteFacultades = async (id_usuario, id_facultad) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/DocenteFacultades`;

    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.post(url, {
      id_usuario,
      id_facultad
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data; // Asumiendo que los datos están en response.data
  } catch (error) {
    console.error('Error no se pudo obtener los Datos ApiServices', error.message);
    return { error: 'Error al obtener los datos' };
  }
};