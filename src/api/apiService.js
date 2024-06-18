import axios from "axios";

export const login = async (email, password) => {
  try {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const url = baseURL + '/api/login';
    
    // Objeto con los datos del usuario a enviar en la solicitud POST
    const userData = {
      email: email,
      password: password
    };

    // Realizar la solicitud POST usando Axios
    const response = await axios.post(url, userData);
    
    // Obtener el token de la respuesta
    const { sessionToken } = response.data;

    // Guardar el token en localStorage
    localStorage.setItem('token', sessionToken);
    
    // Aquí puedes manejar la respuesta según sea necesario
    console.log(response.data); // Por ejemplo, imprimir la respuesta del servidor

    // Devolver la respuesta para que pueda ser manejada en el componente
    return response.data;
  } catch (error) {
    // Manejar el error adecuadamente
    console.error('Error al intentar Logearse:', error.message);

    // Devolver un objeto con información sobre el error
    return { error: 'Error al intentar iniciar sesión' };
  }
};


//F  A  C  U  L  T  A  D  E  S

export const getDatoGeneralFacultades = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/facultades`;

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
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralFacultades', error.message);
    return { error: 'Error al obtener los datos' };
  }
};


export const getDatoGeneralArea = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/areas`;

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
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralFacultades', error.message);
    return { error: 'Error al obtener los datos' };
  }
};


export const getDatoGeneralLicencia = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/licencias`;

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
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralLicencia', error.message);
    return { error: 'Error al obtener los datos' };
  }
};




export const getDatoAsistencia = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/asistencias`;

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
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralLicencia', error.message);
    return { error: 'Error al obtener los datos' };
  }
};


// E l i m i n a r 

export const deleteDatoAsistencia = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/asistencias/${id}`;

    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data; // Asumiendo que los datos de respuesta están en response.data
  } catch (error) {
    console.error('Error no se pudo eliminar el dato ApiServices deleteDatoAsistencia', error.message);
    return { error: 'Error al eliminar el dato' };
  }
};



export const getDatoMateriaGrupoId = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/materiaGrupo/${id}`;

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
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralLicencia', error.message);
    return { error: 'Error al obtener los datos getDatoMateriaGrupoId' };
  }
};


export const getDatoAreaId = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/areas/${id}`;

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
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralLicencia', error.message);
    return { error: 'Error al obtener los datos getDatoMateriaGrupoId' };
  }
};




export const getDatoArea = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/areas`;

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
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralLicencia', error.message);
    return { error: 'Error al obtener los datos getDatoMateriaGrupoId' };
  }
};






//U  S  U  A  R  I O  S 

export const getDatoGeneralUsuarios = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/usuarios`;

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
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralUsuarios', error.message);
    return { error: 'Error al obtener los datos' };
  }
};



export const crearUsuariosFacultad = async (id_usuario, id_facultad) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/api/usuarios`;

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
    console.error('Error no se pudo obtener los Datos ApiServices getDatoGeneralUsuarios', error.message);
    return { error: 'Error al obtener los datos' };
  }
};