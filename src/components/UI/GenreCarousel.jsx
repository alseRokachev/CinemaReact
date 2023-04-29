import React from 'react';
import '../../App.css'
import {useSelector} from "react-redux";

const GenreCarousel = () => {
    const genres = useSelector(state => state.filmsStore.genre)
    return (
        <div className={'mt-10 mb-24 w-full h-72'}>
            <div className={'w-full h-full flex overflow-x-auto genre_scrollbar pb-8'}>
                {genres.map((genre, index) => {
                    return <div
                        className={'min-w-[300px] max-h-[300px] w-full h-full bg-slate-800 rounded-3xl mr-7 flex items-start justify-start p-4 text-2xl text-slate-50 relative duration-500 hover:cursor-pointer hover:bg-slate-700'}
                        key={index}>
                        <p className={'poppins'}>{genre.name}</p>
                        <img src={genre.img} alt="" className={'absolute w-4/12 bottom-5 right-5'}/>
                    </div>
                })}
            </div>
        </div>
    );
};

export default GenreCarousel;