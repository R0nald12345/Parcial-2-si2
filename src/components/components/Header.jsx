import {Link} from 'react-router-dom'

import { IoNotifications } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiChat1Fill } from "react-icons/ri";

import { BiSolidLike } from "react-icons/bi";  //1:56:18

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const Header = () => {
  return (
    <header className=' h-[7vh] md:h-[10vh] border-b border-gray-600 border-secondary-100 p-8 flex items-center justify-end bg-red-500/50'>
      <nav className='flex items-center gap-2'>
       

          {/* Esta parte es la seeccion del NOmbre y foto del usuario */}
        {/* <Menu menuButton={
              <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100  p-2 rounded-lg transition-colors'>
                <img src='https://img.freepik.com/foto-gratis/retrato-joven-feliz-camisa-blanca_171337-17462.jpg'
                      className='w-8 h-8 object-cover rounded-full'    
                />
                <span>Ing Peinado</span>
                <FaAngleDown/>
              </MenuButton>
            } 
            arrow={true}
            // arrowClassName = "bg-secondary-100"
            align='end'
            
            transition 
            menuClassName={"bg-white p-4"}
             */}
        >
          {/* <MenuItem className={"p-0 hover:bg-transparent"}>
            <Link className='rounded-lg transition-colors hover:bg-primary-100/90 flex items-center gap-x-4 py-2 px-6 flex-1'
              to= "/perfil"
            >
              <img src='https://img.freepik.com/foto-gratis/retrato-joven-feliz-camisa-blanca_171337-17462.jpg'
                      className='w-8 h-8 object-cover rounded-full'    
              />
              <div className='flex flex-col gap-1 text-sm'>
                <span className='text-sm font-semibold'>Ing Peiando</span>
                <span className='text-xs text-gray-800 font-semibold'>despeinado@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-700'/>
          <MenuItem className={"p-0 hover:bg-transparent"}>
            <Link className='rounded-lg transition-colors hover:text-gray-300 hover:bg-gray-500 flex items-center gap-x-4 py-2 px-6 flex-1'
              to= "/configuracion"
            >
              <IoMdSettings/> Configuracion
            </Link>
          </MenuItem>

          <MenuItem className={"p-0 hover:transparent font-bold"}>
            <Link className='rounded-lg transition-colors hover:text-white hover:bg-red-500/80 flex items-center gap-x-4 py-2 px-6 flex-1'
              to= "/configuracion"
            >
              <RiLogoutCircleRLine className='text-red-600'/> 
              <p className='text-red-600 font-sem hover:text-white'>Cerrar Sesion</p>
            </Link>
          </MenuItem>
          


        </Menu> */}
      </nav>
    </header>
  )
}

export default Header
