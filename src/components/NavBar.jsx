import React from 'react'
import Logo from "../assets/img/logo.png"

function NavBar() {
  return (
    <div className='py-8 flex items-center shadow-lg top-0  relative w-full'>
        <div className='flex ml-64 m-auto'> 
            <a href="https://www.indexx.ai/" className=' w-48'>
              <img src={Logo} alt="indexx logo" className='float-right'/>
            </a>
            
        </div>
        <div className='flex mx-auto items-center m-auto'>
        <nav className=' text-lg font-light'>
            <a href="https://www.indexx.ai/services" id='home' className='mx-6 hover:text-brand-secondary hover:font-bold hover:underline-offset-4'> Why Indexx</a>
            <a href="https://www.indexx.ai/team" className='mx-6 hover:text-brand-secondary hover:font-bold'>How It Works</a>
            <a href="https://www.indexx.ai/nft" className='mx-6 hover:text-brand-secondary hover:font-bold'>NFT</a>
            <a href="https://www.indexx.ai/transparency" className='mx-6 hover:text-brand-secondary hover:font-bold'> Transparency</a>
            <a href="https://www.indexx.ai/copy-of-sign-in" className='mx-6 hover:text-brand-secondary hover:font-bold'> Sign In</a>
        </nav>
        <button className='bg-secondary text-primary rounded-3xl p-3 w-40 shadow-lg ml-24'>
            Sign Up
        </button>
        </div>
    </div>
  )
}

export default NavBar