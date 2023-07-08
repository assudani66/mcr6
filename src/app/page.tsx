'use client'

import { useFoodData } from "@/Context/store"
import { cuisineData } from "@/data"
import { useState } from "react"

export default function Home() {

  const{foodState} = useFoodData()

  return (
    <>
    <div className="flex space-x-2">
    {cuisineData.map((({name,id})=><button className="px-2 py-1 bg-red-500 rounded-md text-white">{name}</button>))}</div>

    <div>{foodState.map((resturantInfo)=>
    <div className='p-5'>
    <p className='text-3xl'>{resturantInfo?.name}</p>
    <p className='text-lg '>{resturantInfo?.address}</p>
    <p className='text-lg'>{resturantInfo?.phone}</p>
    <div className="flex space-x-4">
      {
        resturantInfo?.menu.map(({name,imgSrc,price,qty})=><div className="flex space-x-4">
        <img className="w-80 h-30 object-cover" src={imgSrc}/>
        </div>)
      }
    </div>
    </div>
    )}
    </div>


    </>

  )
}
