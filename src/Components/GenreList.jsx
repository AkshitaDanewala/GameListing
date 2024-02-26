import React, { useEffect, useState } from 'react'
import GloblApi from '../Services/GloblApi'

const GenreList = ({genreId, selectedGenreName}) => {

  const [genreList, setgenreList] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(()=>{

    getGenreList()

  }, [])  

const getGenreList=()=>{
    GloblApi.getGenreList.then((res)=>{
        // console.log(res.data.results)
        setgenreList(res.data.results)
    })
}

  return (
    <div>
    <h2 className='text-[30px] font-bold dark:text-white '>Genre</h2>

    {genreList.map((item, index)=>(

  <div key={index} 
  onClick={()=> {setActiveIndex(index); genreId(item.id); selectedGenreName(item.name)} }
  className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group  rounded-lg hover:dark:bg-gray-600 ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" :null }`}>

   <img src={item.image_background}  
   className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex == index ? "sacle-105" :null }`}/>

        <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300  ${activeIndex == index ? "font-bold" :null }`}>{item.name}</h3>
      </div>

    ))}
    </div>
  )
}

export default GenreList