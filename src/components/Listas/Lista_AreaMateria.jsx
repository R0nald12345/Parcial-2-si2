import { ImWhatsapp } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
const Lista_AreaMateria = ({id,nombre,materias}) => {


   const cantMaterias = materias.length; 

  return (
    <>
        <ul className='w-full flex gap-1 rounded-xl mb-3 bg-white shadow-xl'>
           
            <li className=" font-semibold w-[15%] px-3 py-2 flex justify-start ">{id}</li>
            <li className=" font-semibold w-[35%] px-2 py-2 text-center ">{nombre}</li>
            <li className=" font-semibold w-[25%] px-2 py-2 text-center ">{cantMaterias}</li>
            <li className='w-[25%] flex justify-between items-center '>
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

export default Lista_AreaMateria