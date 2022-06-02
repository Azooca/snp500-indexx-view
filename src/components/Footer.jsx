import React from 'react'
import Logo from "../assets/img/logo.png"

function Footer() {
  return (
    <section className=' bg-grey p-20'>
      <div className='grid grid-cols-5'>
        <div className=''></div>
        <div className=''>
          <img src={Logo} alt="indexx logo" className=' w-40 mx-auto my-5' />
          <h4 className='text-center'>
          Indexx stock tokens are the world first stablecoins pegged with world largest stock market index S&P 500, having pioneered the concept in the digital token space.
          </h4>
        </div>
        <div className='text-center'>
          <h2 className='my-5 font-black'>Indexx</h2>
          <h4 className='text-center '>
            550 Newport Center Drive<br/>Newport Beach,<br/>CA 91788 United State
          </h4>
          <h4 className='my-5 font-medium'>949-228-9079</h4>
        </div>
        <div className='text-left'>
          <h2 className='my-5 font-black'>Links</h2>
          <ul className='text-left font-base text-xl '>
            <li className='my-3'>Why Indexx</li>
            <li className='my-3'>How It Works</li>
            <li className='my-3'>NFT</li>
            <li className='my-3'>Transparency</li>
            <li className='my-3'>Sign In</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Footer