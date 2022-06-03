import React,{ useRef, useEffect,useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import {dataSetTemp} from "../components/Utils"  
import PriceDate from '../components/PriceDate';
import PriceDetails from '../components/PriceDetails';
import axios from 'axios'
Chart.register(...registerables);


 

function ChartSNP() {
    const chartRef = useRef();
    let dt = dataSetTemp()
    let dl = ['10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']
    let [dataset, setDataset] = useState(dt)
    const [dataLabel, setDataLabel] = useState(dl)
    const headers = {
     
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }
    const buildData = (period = '1d')=>{ 
      axios.get('https://coinx500.io/?period='+period,{headers})
      .then(res => {
        console.log(res)
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
        fetch('https://coinx500.io/?period='+period, {
          mode: 'no-cors',
          method:'GET', 
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          }, 
        }).then((response)=>response.json())
        .then((data)=>{
          console.log(data)
            dt['data']=data['close']
            let newdt=dt
            setDataset(newdt)
            console.log(newdt)
            setDataLabel(data['date'])
        }).catch((err)=>{
            console.log(err)
        })
    }
    const updateChartData = (period)=>{
        console.log(period)
        buildData(period)
    }


useEffect(()=>{buildData()},[dataset])

  const options = {
    plugins:{legend:{display:false}},
    tension:0.4
    
  };
  return (
    <div className=' col-span-2'>
        <PriceDate/>
        <div className='flex gap-6 mb-2'>
            <div onClick={()=>updateChartData('1d')} className='   text-primary w-14 items-center content-center text-center p-3 rounded-md'>1D</div>
            <div onClick={()=>updateChartData('5d')} className='  text-primary  w-14 items-center content-center text-center p-3 rounded-md'>5D</div>
            <div onClick={()=>updateChartData('1mo')} className='   text-primary  w-14 items-center content-center text-center p-3 rounded-md'>1M</div>
            <div onClick={()=>updateChartData('6mo')} className='   text-primary  w-14 items-center content-center text-center p-3 rounded-md'>6M</div>
            <div onClick={()=>updateChartData('1y')} className='   text-primary  w-14 items-center content-center text-center p-3 rounded-md'>1Y</div>
        </div>

        <Line 
        ref={chartRef} 
          data={{
            labels: dataLabel,
            datasets: [
                 dataset
              ],
          }}
          options={options}
          height={200}
          width={500}
        />

        <PriceDetails/>
        

    </div>
  )
}

export default ChartSNP