import React, {useState, useEffect} from 'react'

function PriceDate() {
    const [price, setPrice] = useState(0.00)
    const [dateData , setDateData] = useState('00:00')

    const getData = ()=>{
        fetch('https://coinx500.io/price', 
        {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }})
        .then((response)=>response.json())
        .then((data)=>{
            let p = parseFloat(data['price']).toLocaleString("en-US")
            setPrice(p)
            setDateData(data['date'])

        })
    }
 
    useEffect(()=>{
        getData() 
    },[price])
  return (
    <section>
        <div>
            <h2 className='font-medium text-4xl mt-6'>{price}</h2>
            <p className='mb-3'>{dateData}</p>
        </div>
    </section>
  )
}

export default PriceDate