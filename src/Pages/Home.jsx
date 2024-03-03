import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalAPI from '../Services/GlobalAPI'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames';

function Home() {
  const [allGameList, setAllGameList] = useState();
  useEffect(() => {
    getAllGameList();
  }, [])

  const getAllGameList = () => {
    GlobalAPI.getAllGames.then((resp) => {
      setAllGameList(resp.data.results)
    })
  }


  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='h-full m-3 hidden md:block'>
        <GenreList />
      </div>
      <div className='col-span-4 m-3 md:col-span-3'>
        {allGameList?.length > 0 ?
          <div>

            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
          </div>
          : null}
      </div>
    </div>
  )
}

export default Home
