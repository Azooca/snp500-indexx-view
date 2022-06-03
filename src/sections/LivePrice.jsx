import React,{useState,useEffect} from 'react'

function LivePrice() {
  const [price, setPrice] = useState(0.00)
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
        let p = parseFloat(data['price'])
        p = (p / 1000).toLocaleString("en-US")
        let price = parseFloat(p).toFixed(2)
        setPrice(price) 
    })
}

useEffect(()=>{
    getData() 
},[price])
  return (
    <div className='mx-auto m-auto items-center justify-center col-span-1'>
        <h2 className='font-medium text-2xl text-center text-primary'>Indexx Stock Token Price
        </h2>
        <h2 className='font-medium text-6xl text-center my-5'>
        ${price}
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