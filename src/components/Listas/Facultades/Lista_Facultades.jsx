import React from 'react'
import { ImWhatsapp } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate} from 'react-router-dom'


const Lista_Facultades = ({id,nombre,sigla}) => {
    const navigate = useNavigate();

    // const changeFormDetails=(id)=>{
    //     navigate(`/unidadeducativa/detalles/${id}`);
    // }

    // const changeRutaEditarFormulario=(id)=>{
    //   navigate(`/unidadeducativa/modificar/${id}`);
    // }


  return (
    <>
        <ul className='w-full flex gap-1 rounded-xl mb-3 bg-white shadow-xl'>
           
            <li className=" font-semibold w-[75%] px-3 py-2 flex justify-start ">{nombre}</li>
            <li className=" font-semibold w-[10%] px-2 py-2 text-center ">{sigla}</li>
            <li className='w-[15%] flex justify-between items-center '>
                <div className='flex justify-around w-full '>
                    {/* <div className='w-1/2 flex gap-2 '> */}
                      <IoEyeSharp 
                        // onClick={()=>changeFormDetails(id)}
                        className="text-3xl p-1 rounded-lg bg-black text-white" />    
    
                      <RiDeleteBin5Line 
                        // onClick={handleEliminar(id)}
                        className="text-3xl text-red-700" />
    
                    {/* </div> */}
                </div>
            </li>
        </ul>

    </>
  )
}
export default Lista_Facultades