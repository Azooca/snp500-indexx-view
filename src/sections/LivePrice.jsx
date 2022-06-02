import React from 'react'

function LivePrice() {
  return (
    <div className='mx-auto m-auto items-center justify-center col-span-1'>
        <h2 className='font-medium text-2xl text-center text-primary'>Indexx Stock Token Price
        </h2>
        <h2 className='font-medium text-6xl text-center my-5'>
        $4.02
        </h2>
        <div className='flex items-center justify-center m-auto'>
            <button className='bg-secondary text-primary rounded-3xl p-3 inline-block align-middle shadow-lg w-full'>
            Buy Indexx Stock Token
            </button>
        </div>
    </div>
  )
}

export default LivePrice