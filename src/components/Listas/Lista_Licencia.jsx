import React from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

const Lista_Licencia = ({nombre,motivo,fecha }) => {
    // const cantMaterias = materias.length; 

    return (
        <>
            <ul className='w-full flex gap-1 rounded-xl mb-3 bg-white shadow-xl'>
               
                <li className=" font-semibold w-[25%] px-2 py-2 text-center">Lic Hip Hop</li>
                <li className=" font-semibold w-[45%] px-2 py-2 text-center ">{motivo}</li>
                <li className=" font-semibold w-[15%] px-2 py-2 text-center ">{fecha}</li>
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

export default Lista_Licencia