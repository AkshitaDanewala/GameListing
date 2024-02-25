import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GloblApi from '../Services/GloblApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames'

const Home = () => {

const [GameList, setGameList] = useState([])

useEffect(()=>{

getAllGamesList()

},[])

  const getAllGamesList = ()=>{

    GloblApi.getAllGames.then((res)=>{
      console.log(res.data.results)
      setGameList(res.data.results)
    })


  }
  return (
    <div className='grid grid-cols-4'>

<div className='h-full hidden md:block px-8'>
<GenreList/>
</div>


<div className=' col-span-4 md:col-span-3' >
 {GameList?.length>0?
 <div>
   <Banner gameBanner={GameList[0]}/>
   <TrendingGames gameList={GameList} />
 </div>
 :null}

</div>

    </div>
  )
}

export default Home

//