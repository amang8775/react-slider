import React from 'react'
import {RiDoubleQuotesL} from "react-icons/ri"
import {RiDoubleQuotesR} from "react-icons/ri"
export default function Card({review}) {
  return (
    <div className = 'w-[500px]' >
       <div className='relative'>
         <img src = {review.image} className = 'w-[120px] h-[120px] object-cover inline-block rounded-full z-10'/>
         <div className = 'w-[120px] h-[120px]  bg-purple-500  inline-block rounded-full absolute z-[-10] left-[5px] top-[-8px]'/>
       </div>

       <div className='flex flex-col justify-center items-center'>
         <div className='text-xl font-bold'> {review.name}</div>
         <div className='text-purple-400 opacity-70'>{review.job}</div>
       </div>

       <div>
         <RiDoubleQuotesL className='mx-auto'/>
         <div>{review.text}</div>
         <RiDoubleQuotesR className='mx-auto'/>
       </div>
    </div>
  )
}
