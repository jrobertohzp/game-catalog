import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalAPI from '../Services/GlobalAPI'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames';
import GamesByGenreId from '../Components/GamesByGenreId';

function Home() {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action')
  useEffect(() => {
    getAllGameList();
    getGameListByGenreId(4);
  }, [])

  const getAllGameList = () => {
    GlobalAPI.getAllGames.then((resp) => {
      setAllGameList(resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }

  const getGameListByGenreId = (id) => {

    GlobalAPI.getGameListByGenreId(id).then((resp) => {
      console.log("Game List By Genre Id", resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }


  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='h-full m-3 hidden md:block'>
        <GenreList genreId={(genreId) => getGameListByGenreId(genreId)}
          selectedGenresName={(name) => setSelectedGenresName(name)} />
      </div>
      <div className='col-span-4 m-3 md:col-span-3'>
        {allGameList?.length > 0 && gameListByGenres.length > 0 ?
          <div>

            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenreId gameList={gameListByGenres}
              selectedGenresName={selectedGenresName} />

          </div>
          : null}
      </div>
    </div>
  )
}

export default Home
