
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Principal from "./components/ComponentsInitial/Principal";
import VentanaLogin from "../src/layout/FormularioLogin";
// import Dashboard from "./components/ComponentDashboardOficial/Dashboard";

import LayoutAdmin from "./layout/LayoutAdmin";
// import Inicio from "./pages/Inicio/Inicio";

// import CentroSalud from "./pages/CentrosSalud/CentroSalud";

// import CentroRecreativo from "./pages/CentrosRecreativos/CentroRecreativo";
// import FormularioAgregarPublica from "./pages/UnidadesEducativas/Publico/FormularioAgregarPublica";
import FormDataPublica from "./pages/UnidadesEducativas/Publico/FormDataPublica";
import ListaGeneralUE from "./pages/UnidadesEducativas/Publico/ListaGeneralUE";
import FormAgregarUE from "./pages/UnidadesEducativas/FormAgregarNuevo/FormAgregarUE";
import FormEditarUE from "./pages/UnidadesEducativas/FormEditar/FormEditarUE";

// import Encabezado_ApoyoGubernamental from "./components/Encabezado_Listas/UnidadesEducativas/Encabezado_ApoyoGubernamental";
// import Encabezado_Desayuno from "./components/Encabezado_Listas/UnidadesEducativas/Encabezado_Desayuno";
// import Encabezado_Mantenimiento from "./components/Encabezado_Listas/UnidadesEducativas/Encabezado_Mantenimiento";
// import Encabezado_ApoyoSocial from "./components/Encabezado_Listas/UnidadesEducativas/Encabezado_ApoyoSocial";
import ListaGeneralFacultades from "./pages/facultades/ListaGeneralFacultades";
import ListaGeneralArea from "./pages/AreaMateria/ListaGeneralArea";
// import ListaGeneralAsistencia from "./pages/Asistencia/ListaGeneralAsistencia";
import ListaGeneralLicencia from "./pages/Licencia/ListaGeneralLicencia";
import ListaGeneralAsistencia from "./pages/Asistencia/ListaGeneralAsistencia";
import ListaGeneralUsuario from "./pages/Usuario/ListaGeneralUsuario";

// import UnidadEducativa from "./pages/UnidadesEducativas/UnidadEducativa";
function App() {

  return(
      <>
        <Router> {/* Envuelve todo dentro del componente Router */}
          <Routes>

            <Route path="/inicio" element={<Principal/>}>
              <Route path="auth" element={<VentanaLogin/>} />
            </Route>

            {/* Para Dashboard Completo */}
            <Route path="/" element={<LayoutAdmin/>} >
            {/* <Route path="/" element={<ListaGeneralFacultades/>} > */}
              <Route index element={<ListaGeneralFacultades/>}/>

              {/* OficinaDistritalPrincipal */}
              <Route path="area-materia" element={<ListaGeneralArea/>} />

              {/* TelefonoUrgencia */}
              <Route path="Licencia" element={<ListaGeneralLicencia/>}/> 

              <Route path="asistencia" element={<ListaGeneralAsistencia/>}/>

              <Route path="usuario" element={<ListaGeneralUsuario/>}/>

              {/* Rutas de Unidades Educativas */}
              <Route path="unidadeducativa" element={<ListaGeneralUE/>} />


              {/* <Route path="unidadeducativa/agregarnuevo" element={<FormularioAgregarPublica/>} /> Formulario Antiguo*/}
              <Route path="unidadeducativa/agregarnuevo" element={<FormAgregarUE/>} />

              <Route path="unidadeducativa/detalles/:id" element={<FormDataPublica/>} />

              {/* <Route path="unidadeducativa/desayuno/:id" element={<Encabezado_Desayuno/>} />
              <Route path="unidadeducativa/mantenimiento/:id" element={<Encabezado_Mantenimiento/>} />
              <Route path="unidadeducativa/apoyo-gubernamental/:id" element={<Encabezado_ApoyoGubernamental/>} />
              <Route path="unidadeducativa/apoyo-social/:id" element={<Encabezado_ApoyoSocial/>} /> */}

              <Route path="unidadeducativa/modificar/:id" element={<FormEditarUE/>} />

              {/* <Route path="centrosalud" element={<CentroSaludGeneral/>}/> */}
              {/* <Route path="centrorecreativo" element={<CentroRecreativo/>}/> */}
            </Route>
              {/* <Route index element={<Principal/>} /> */}
          </Routes>
        </Router>

      </>
  )
}

export default App
