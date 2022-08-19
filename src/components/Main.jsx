import React from 'react' 
import ChartSNP from '../sections/Chart'
import LivePrice from '../sections/LivePrice'

function Main() {
  return (
    <div className='container  m-10'>
        <h2 className='font-black text-5xl  text-primary'> Indexx 500 token pegged with S&P 500 index</h2>
        <section className='grid grid-cols-3 w-full max-w-full'>
            <ChartSNP/> 
            <LivePrice/>
        </section>
    </div>
  )
}

export default Main