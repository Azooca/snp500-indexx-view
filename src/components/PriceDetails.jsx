import React,{useState,useEffect} from 'react'

function PriceDetails() {
  const [open, setOpen] = useState(0.00)
  const [close , setClose] = useState('00:00')
  const [high, setHigh] = useState(0.00)
  const [low , setLow] = useState('00:00')

    const getData = ()=>{
        fetch('https://coinx500.io/price', 
        {  
          method:'GET',
          headers:{'Content-Type': 'application/json'}
        })
        .then((response)=>response.json())
        .then((data)=>{ 
            setOpen(parseFloat(data['open']).toLocaleString("en-US"))
            setClose(parseFloat(data['close']).toLocaleString("en-US"))
            setHigh(parseFloat(data['high']).toLocaleString("en-US"))
            setLow(parseFloat(data['low']).toLocaleString("en-US"))

        })
    }
 
    useEffect(()=>{
        getData() 
    },[high])

  return (
    <section>
        <div className='grid grid-cols-4 mt-4 mx-auto '>
            <div className='text-right mr-5'>Open</div>
            <div>{open}</div>
            <div className='text-right mr-5'>Low</div>
            <div>{low}</div>
        </div>
        <div className='grid grid-cols-4 mt-4 mx-auto '>
            <div className='text-right mr-5'>High</div>
            <div className='text-left'>{high}</div>
            <div className='text-right mr-5'>Close</div>
            <div>{close}</div>
        </div>
    </section>
  )
}

export default PriceDetails