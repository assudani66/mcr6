"use client"
import { useFoodData } from '@/Context/store'
import AddReview from '@/components/AddReview'
import React, { useState } from 'react'

const page = ({ params }: { params: { resturantId: string }}) => {

    const{foodState} = useFoodData()
    
    const resturantInfo = foodState?.find(({id}) => id === Number(params.resturantId))

  return (
    <div>
    <div className='p-5'>
        <p className='text-3xl'>{resturantInfo?.name}</p>
        <p className='text-lg '>{resturantInfo?.address}</p>
        <p className='text-lg'>{resturantInfo?.phone}</p>
        
    </div>

    <AddReview resturantId={Number(params.resturantId)}/>
    
    <div className='flex-col space-y-3'>
        {resturantInfo?.ratings.map(
            ({rating,comment,pp,revName})=>
            <div className='flex w-full p-10 border-b-gray-800 justify-between'>
                <div className='flex space-x-2 items-center'>
                    <img  className='w-10 h-10 rounded-full' src={pp}/>
                <div className='flex-col'>
                    <p className='font-semibold'>{revName}</p>
                    <p>{comment}</p>
                </div>
                </div>
                <div className='bg-yellow-500 text-white h-fit px-2 py-1 rounded-lg'>{rating}⭐</div>
            </div>
        )}
    </div>


    </div>
  )
}

export default page