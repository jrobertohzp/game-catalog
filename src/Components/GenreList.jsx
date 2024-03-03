import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function GenreList() {

    const [genreList, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        getGenreList();
    }, [])

    const getGenreList = () => {
        GlobalAPI.getGenreList.then((response) => {
            console.log(response.data.results)
            setGenreList(response.data.results)
        })

    }
    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
            {genreList.map((item, index) => (
                <div
                    onClick={() => setActiveIndex(index)}
                    className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 group p-2 rounded-lg hover:dark:bg-gray-600
                ${activeIndex == index ? "bg-gray-300 dark:bg-gray600" : null}`}>

                    <img src={item.image_background} className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex == index ? "scale-105" : null}`} />

                    <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300${activeIndex == index ? "font-bold" : null}`}>{item.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default GenreList