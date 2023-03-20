import React, { useState } from 'react'
import Card from './Card'
import { BsChevronRight} from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import reviews from "./data";

export default function Testimonials() {
  
  const [index , setIndex] = useState(0) ; 
  const leftHandler = ()=>{
       if(index - 1 >= 0 ){
        setIndex(index-1) ; 
       }
       else{
        setIndex(reviews.length -1) ; 
       }
  };
  const righttHandler = ()=>{
    if(index + 1 < reviews.length ){
      setIndex(index+ 1) ; 
     }
     else{
      setIndex(0) ; 
     }
  };
  const randomhandler = ()=>{
       setIndex(Math.floor(Math.random ()*reviews.length)) ; 
  };
  return (
    <div className='flex flex-col justify-center items-center w-[500px] m-auto h-full gap-5'>
       <div>
        <h1 className='text-2xl font-bold'>Our Testimonials</h1>
         <div className='h-1 w-[100px] absolute bg-purple-500 mx-auto relative'></div>
       </div>

       <div >
         <Card review = {reviews[index]} />
       </div>
       
       <div className='flex text-purple-500 '>
        <BsChevronLeft onClick={leftHandler}/>
        <BsChevronRight onClick={righttHandler}/>
       </div>
       

       <div>
        <button onClick={randomhandler} className='p-[10px] flex justify-center items-center w-100px bg-purple-400 text-white rounded-md'>Surprise Me</button>
       </div>


    </div>
  )
}
