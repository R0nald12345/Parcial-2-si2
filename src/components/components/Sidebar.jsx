import {Link,useNavigate} from 'react-router-dom'

import { useState } from 'react';

import { IoCloseSharp } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { RxCaretRight } from "react-icons/rx";
import { FaRegChartBar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiJumpAcross } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { FaPersonShelter } from "react-icons/fa6";
import { BsBusFrontFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
    const navigate = useNavigate();

    const [showMenu, setshowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const rutaAsistencia=()=>{
        navigate('asistencia');
    }

    const rutaCentroSalud=()=>{
        navigate('centrosalud');
    }

    // const rutaUnidadEducativaPublica=()=>{
    //     navigate('unidad/educativa/publica');
    // }

    // const rutaUnidadEducativaPrivada=()=>{
    //     navigate('unidad/educativa/privada');
    // }

    const rutaUnidadEducativaConvenio=()=>{
        navigate('/unidadeducativa');
    }

    const rutaAreaMateria=()=>{
        navigate('area-materia');
    }

    const rutaLicencia=()=>{
        navigate('licencia');
    }



  return (
    <>
        <div className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full  top-0 bg-red-600
                        p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0": "-left-full"} transition-all`}>
            <div>
                <h1 className='text-center text-2xl font-bold text-white mb-10'>
                    Administración
                </h1>
                <ul className='text-white'>
                    <li className='mb-3'>
                        <Link to="/" 
                        className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-red-800 text-1xl font-semibold transition-colors
                                    ${ location.pathname ==='/' && 'bg-red-900 text-white'}`}>
                            <FaRegChartBar className='text-primary'/> Facultades
                        </Link>

                    </li>

                    <li 
                        onClick={rutaAreaMateria}
                        className='mb-3'>
                        <Link to="/" 
                        className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-red-800 text-1xl font-semibold transition-colors
                                    ${ location.pathname ==='/area-materia' && 'bg-red-900 text-white'}`}>
                            <FaRegChartBar className='text-primary'/> Areas
                        </Link>

                    </li>

                    <li 
                        onClick={rutaLicencia}
                        className='mb-3'>
                        <Link to="/" 
                        className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-red-800 text-1xl font-semibold transition-colors
                                    ${ location.pathname ==='/licencia' && 'bg-red-900 text-white'}`}>
                            <FaRegChartBar className='text-primary'/>Licencia
                        </Link>

                    </li>
                    <li 
                        onClick={rutaUnidadEducativaConvenio}
                        className='mb-3'>
                        <Link to="/" 
                        className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-red-800 text-1xl font-semibold transition-colors
                                    ${ location.pathname ==='/unidadeducativa' && 'bg-red-900 text-white'}`}>
                            <FaRegChartBar className='text-primary'/>Unidades Educativas
                        </Link>

                    </li>

                    {/* Unidades Educativas con Drop Down */}
                    {/* <li className='mb-3'>
                        <button className={`w-full flex items-center justify-between gap-4 py-2 px-4 rounded-lg hover:bg-primary-900/50 text-1xl font-semibold transition-colors
                                        `}
                                onClick={()=>setShowSubMenu(!showSubMenu)}
                            >
                            <span className='flex items-center text-start gap-4'>
                                <FaHome className='text-primary'/> Unidades Educativas
                            </span>
                            <RxCaretRight className={`mt-1 ${showSubMenu && 'rotate-90'} transition-all`}/>
                        </button>
                        <ul className={`my-2 ${!showSubMenu && 'hidden'}`}>
                            <li>
                                <div 
                                    style={{cursor:'pointer'}}
                                    onClick={rutaUnidadEducativaConvenio}
                                    className={`py-2 px-6 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 
                                                before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2
                                                before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors
                                                ${location.pathname === '/unidad/educativa/convenio'&& 'bg-primary-900/50 rounded-full text-white'}`}>
                                    Convenio
                                </div>
                            </li>

                            <li>
                                <div 
                                    style={{cursor:'pointer'}}
                                    onClick={rutaUnidadEducativaPublica}
                                    className={`py-2 px-6 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 
                                                before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2
                                                before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors
                                                ${location.pathname === '/unidad/educativa/publica'&& 'bg-primary-900/50 rounded-full text-white'}`}>
                                    Públicos
                                </div>
                            </li>

                            <li>
                                <div 
                                    style={{cursor:'pointer'}}
                                    onClick={rutaUnidadEducativaPrivada}
                                    className={`py-2 px-6 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 
                                                before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2
                                                before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors
                                                ${location.pathname ==='/unidad/educativa/privada'&& 'bg-primary-900/50 rounded-full text-white' }`}>
                                    Privados
                                </div>
                            </li>
                           
                        </ul>
                    </li> */}

                    <li className='mb-3' onClick={rutaAsistencia}>
                        <Link to="/" 
                              className={` flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-red-800 text-1xl font-semibold transition-colors
                                            ${location.pathname === '/asistencia' && 'bg-red-900 text-white'}`}
                        >
                            <GiJumpAcross className='text-primary'/> Asistencia
                        </Link>
                    </li>

                    
                   
                    
                </ul>
            </div>
            <nav>

                <Link 
                    to="/inicio/auth " 
                    className='text-white  flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-red-800  transition-colors text-1xl font-semibold'>
                        <CiLogout className='text-primary'/> Cerrar Sesion
                </Link>
            
            </nav>
        </div>

        <button 
            onClick={()=>setshowMenu(!showMenu)}
            className='xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50'>
                {showMenu?<IoCloseSharp/>:<SlMenu/>}
            
        </button>
    </>
  )
}

export default Sidebar
