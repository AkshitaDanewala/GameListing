import React, { useEffect } from 'react'
import GloblApi from '../Services/GloblApi'

const GenreList = () => {


  useEffect(()=>{

    getGenreList()

  }, [])  

const getGenreList=()=>{
    GloblApi.getGenreList.then((res)=>{
        console.log(res.data.results)
    })
}

  return (
    <div>GenreList</div>
  )
}

export default GenreList