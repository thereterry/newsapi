import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import useRequestData from "../hooks/useRequestData";
import Error from '../components/Error'



const LoveCalculator = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    const [ name1, setName1 ] = useState("")
    const [ name2, setName2 ]  = useState("")
 

//     useEffect(()=>{
//     handleCalculation()
// }, [])

   const handleCalculation= ()=> {
    makeRequest ('https://love-calculator.p.rapidapi.com/getPercentage?', 
                "GET", 
                null, 
                {
                  'X-RapidAPI-Key': '60e71efc7fmsh9912c80f25a454ap11db6ajsnaa223e1cf282',
                  'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com' ,
            },
              {
                fname: name1,
                sname: name2

           
              })
    }


  return (
    <div>
              <h1>Love Calculator</h1>
              { isLoading && <Loader/> }
              { error && <Error/> }
              <>
              <input onInput={ e => setName1 (e.target.value) } required type='text' placeholder='Skriv det ene navn' className='mb-5 mr-1 input input-border'/>


              <input 
                onInput={(e) => setName2(e.target.value)} 
                required type='text' 
                placeholder='Skriv det andet navn' 
                className='mb-5 mr-1 input input-border' 
                />
            
            <button onClick={()=> handleCalculation()} className='mt-4 ml-5 bg-primary-subtle btn'>&#9829; Lav beregning &#9829;</button>
              </>
      

            {
                data && 
                <div className='card items-center'>
                    <h2 className='mb-6 text-3xl font-bold text-center'>{ data.percentage }</h2>
                    <p>{data.fname}+ {data.sname}</p>
                    <div style={{width:data.percentage + "%"}} className=' bg-red-500 rounded-md h-full'>
                    <p className=' animate-pulse'>{data.result}</p>
                </div>
              
                    {/* <a href={ data.link } target='_blank'>Læs mere {data.link}</a>
                    <button onClick = { ()=> LoveCalculator( )}className='w-40 btn btn-neutral'> Match Mere</button> */}
                </div>
            }

    </div>
  )
}

export default LoveCalculator
