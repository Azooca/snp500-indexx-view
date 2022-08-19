import React,{useState,useEffect} from 'react'

function LivePrice() {
  const [price, setPrice] = useState(0.0)
  const [prices, setPrices] = useState(0.0)

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
        setPrices(parseFloat(p).toFixed(2));
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
    <h2 className='text-1xl text-primary3'>S&P 500 Stock Market Index :   ${prices}
     </h2>
     <h2 className=' text-1xl text-primary3'>Indexx 500 Token is 1:1000 to S&P 500 Stock Market Index
     </h2>
     <h2 className=' text-1xl text-primary3'>Indexx 500 Token Price :
     </h2>


        <h2 className=' text-6xl text-primary3 text-center my-5'>
        ${price}
        </h2>
        <div className='flex items-center justify-center m-auto'>
            <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://lively-tulumba-cb80c0.netlify.app';
              }}
             className='bg-secondary2 text-primary2 rounded-3xl p-3 inline-block align-middle shadow-lg w-full'>
            Buy Indexx Stock Token
            </button>
        </div>
    </div>
  )
}

export default LivePrice