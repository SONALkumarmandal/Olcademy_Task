import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='w-full fixed top-0 left-0 z-50'>
    <div>
      {isOpen ? (
        <div className="fixed inset-0 h-screen w-full backdrop-blur transition-all duration-500 ease-out">
          <div className='w-full flex-col'>
              <div className='flex h-1/4 justify-between border-b-[0.1px] bg-amber-400'>
              <Link to='' className='p-8 ml-16 font-bold text-xl'><i>Scent-Master</i></Link>
              <div className='p-5 mr-20'><Hamburger toggled={isOpen} toggle={setOpen}/></div>
              </div>
              <div className='font-semibold flex text-2xl flex-col justify-center items-center mt-48 gap-16'>
                <Link to='/explore' className=' bg-amber-500 hover:bg-amber-400 w-32 h-12 w rounded-md flex justify-center items-center'>
                  <i>Explore</i>
                </Link >
                <div className=' bg-amber-500 hover:bg-amber-400 w-32 h-12 w rounded-md flex justify-center items-center'><i>About</i></div>
                <div className='bg-amber-500 hover:bg-amber-400 w-32 h-12 w rounded-md flex justify-center items-center'><i>Shop</i></div>
              </div>
          </div>
        </div>
      ) : (
        <div className='w-full 1/4-24 bg-amber-400 flex justify-between items-center border-b-[0.1px]'>
          <Link to='' className='p-8 ml-16 font-bold text-xl'><i>Scent-Master</i></Link>
          <div className='hidden lg:flex gap-10 mr-24 '>
            <Link to='/explore'>Explore</Link>
            <div>About</div>
            <div>Shop</div>
          </div>
          <div className='block sm:block p-5 mr-20 gap-10 lg:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Navbar 