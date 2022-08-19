import React, {useState, useEffect} from 'react'

function PriceDate() {
    const [dateData , setDateData] = useState('00:00')

    const getData = ()=>{
         setDateData(new Date().toLocaleString());
    }
 
    useEffect(()=>{
        getData() 
    },[])
  return (
    <section>
        <div><br></br>
        <p className='text-2xl text-primary3'>{dateData}</p>
        </div>
    </section>
  )
}

export default PriceDate