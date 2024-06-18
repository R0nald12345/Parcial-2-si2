import Navegacion from './Navegacion'
import fondoImagen from '../ComponentsInitial/img/imagenLogin.jpg'
import {Outlet} from 'react-router-dom'


const Principal = () => {

    return (
        <div>
            {/* flex items-center */}


            <main className='h-screen bg-center bg-cover bg-blend-overlay bg-black/50'
                  style={{backgroundImage: `url(${fondoImagen})`}}>
                    
                <header className='h-20 flex items-center  md:h-20 bg-red-600'>
                    {/* Navegacion contenedor */}
                    <Navegacion/>
                </header>  
                        
                    <Outlet/>
            </main> 

        </div>
    )
}

export default Principal
