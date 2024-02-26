import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GloblApi from '../Services/GloblApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames'
import GamesByGenreId from '../Components/GamesByGenreId'

const Home = () => {

const [GameList, setGameList] = useState([])
const [gameListByGenre, setgameListByGenre] = useState([])
const [selectedGenreName, setselectedGenreName] = useState("Action")

useEffect(()=>{

getAllGamesList()
getGamesListByGenreId(4)

},[])

  const getAllGamesList = ()=>{

    GloblApi.getAllGames.then((res)=>{
      // console.log(res.data.results)
      setGameList(res.data.results)
      
    })


  }

const getGamesListByGenreId = (id)=>{
  // console.log("GENREID", id)
  GloblApi.getGamesListByGenreId(id).then((res)=>{
    console.log("Game List By GenreId",res.data.results)
    setgameListByGenre(res.data.results)
  })
}

  return (
    <div className='grid grid-cols-4 p-5'>

<div className='h-full hidden md:block px-8'>
<GenreList 
genreId={(genreId)=> getGamesListByGenreId(genreId)}
selectedGenreName={(name)=> setselectedGenreName(name)}

/>
</div>


<div className=' col-span-4 md:col-span-3' >
 {GameList?.length>0&&gameListByGenre.length>0?
 <div>
   <Banner gameBanner={GameList[0]}/>
   <TrendingGames gameList={GameList} />
   <GamesByGenreId gameList={gameListByGenre}
   setselectedGenreName={selectedGenreName}/>
 </div>
 :null}

</div>

    </div>
  )
}

export default Home

//