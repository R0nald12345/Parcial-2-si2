// import { useState } from 'react'

import { Link } from "react-router-dom"

const Navegacion = () => {

  // const [showMenu, setShowMenu] = useState(false)
  return (
    <>
        <div className='px-5 w-full block xl:flex-col items-center justify-center '>

            <h3 className='text-white uppercase text-center text-4xl font-bold pt-2'>
              Universidad
            </h3>  
            <h2 className="text-center text-3xl font-semibold text-white pb-2">
              Univ System
            </h2>


            {/* Navegacion Menu
            <nav className='text-white flex justify-center gap-5'>
                <Link to="/">Home</Link>
                <Link to="auth">Login</Link>
                <Link to="/">Signup</Link>
            </nav> */}



        </div>
    </>
  )
}

export default Navegacion
