import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionFavouritePlaylist, actionSeeLaterPlaylist } from '../../store/Playlists';

const DetectiveCarousel = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.filmsStore.films).filter(film => film.genre === 'detective')
    const [playBtn, setPlayBtn] = useState()
    const favouritePlaylist = useSelector(state => state.playlists.favourite)
    const seeLaterPlaylist = useSelector(state => state.playlists.seeLater)
    return (
        <div className={'mt-10 w-full h-96'}>
            <div className={'w-full h-full flex overflow-x-auto genre_scrollbar pb-8'}>
                {data.map((film, index) => {
                    return <div
                        className={'min-w-[650px] max-h-[400px] w-full h-full bg-slate-800 rounded-3xl mr-7 flex items-start text-2xl text-slate-50 relative duration-500 hover:cursor-pointer hover:bg-slate-700'}
                        key={index} onMouseOver={() => setPlayBtn(index)} onMouseLeave={() => setPlayBtn()}>
                        <div
                            className="absolute w-full h-full bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
                        <p className={'poppins text-4xl z-20 absolute bottom-3 px-4 max-w-[80%]'}>{film.name}</p>
                        {playBtn === index ? (
                            <p className={'poppins absolute right-4 bottom-3 z-20 text-lg'}>{film.length}</p>) : ''}
                        <img src={film.img} alt="" className={`absolute h-full w-full bottom-0 left-0 rounded-3xl duration-500 ${playBtn === index ? 'brightness-75' : ''}`} />
                        <div className="absolute bottom-0 w-full z-20 flex justify-center items-center h-full">
                            {playBtn === index ? (
                                <img src="icons8-play-100.png" alt="" className={'w-[60px] z-40 sticky'} />) : ''}
                        </div>
                        <div className="w-10 h-10 absolute top-3 right-3 z-30" onMouseOver={() => setPlayBtn(index)} onMouseLeave={() => setPlayBtn()}
                            onClick={() => dispatch(actionFavouritePlaylist(film))}>
                            {playBtn === index && (
                                <div className="w-full h-full flex items-center justify-center">
                                    {!favouritePlaylist.find(item => item.id === film.id) ? <img src='icons8-heart-100.png' className='w-4/6' /> : <img src='icons8-heart-filled-100.png' className='w-4/6' />}
                                </div>
                            )}
                        </div>
                        <div className="w-10 h-10 absolute top-3 right-12 z-30" onMouseOver={() => setPlayBtn(index)} onMouseLeave={() => setPlayBtn()}
                            onClick={() => dispatch(actionSeeLaterPlaylist(film))}>
                            {playBtn === index && (
                                <div className="w-full h-full flex items-center justify-center">
                                    {!seeLaterPlaylist.find(item => item.id === film.id) ? <img src='icons8-folder-100.png' className='w-4/6' /> : <img src='icons8-folder-filled-100 .png' className='w-4/6' />}
                                </div>
                            )}
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default DetectiveCarousel;