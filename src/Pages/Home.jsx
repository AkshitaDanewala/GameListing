import React from 'react'
import GenreList from '../Components/GenreList'

const Home = () => {
  return (
    <div className='grid grid-cols-4'>

<div className='bg-red-200 h-full hidden md:block'>
<GenreList/>

</div>

<div className=' col-span-4 md:col-span-3 bg-blue-400 '>GameList</div>

    </div>
  )
}

export default Home

//