import { useFoodData } from '@/Context/store'
import React, { useState } from 'react'

const AddReview = ({resturantId}:{resturantId :number}) => {

    const{foodState,foodDataDispatch} = useFoodData()
    const [formData, setFormData] = useState({
        rating:0,
        
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
        revName: "Krish"
      })

    const updateFormData = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,[e.target.name] : e.target.value})
      }

  return (
    <>
    <div>
    <input type="number" className="border border-sky-500 rounded-md p-2" name="rating" onChange={e=>updateFormData(e)}/>
    <input className="border border-sky-500 rounded-md p-2" name="comment" onChange={e=>updateFormData(e)} />
    </div>
    <button className="px-2 py-1 bg-red-500 rounded-md text-white" onClick={()=>foodDataDispatch({type:'ADD_REVIEW',payload:{
    resturantId:Number(resturantId),
    rating:{
        rating: formData.rating,
        comment: "Overpriced menu for mediocre quality",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
        revName: "you"
    }
    }})}>Add Review</button>
</>
  )
}

export default AddReview