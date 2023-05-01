import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFavouritePlaylist, actionSeeLaterPlaylist } from '../../store/Playlists';

const Playlist = () => {
    const dispatch = useDispatch()
    const favouritePlaylist = useSelector(state => state.playlists.favourite)
    const [playBtn, setPlayBtn] = useState()
    const seeLaterPlaylist = useSelector(state => state.playlists.seeLater)

    return (
        <div className={'w-full flex flex-wrap justify-between'}>
            {seeLaterPlaylist.map((film, index) => {
                return <div
                    className={'max-w-[400px] w-full h-80 bg-slate-800 rounded-3xl mt-12 flex items-start justify-start text-2xl text-slate-50 relative duration-500 hover:cursor-pointer hover:bg-slate-700'}
                    key={index}>
                    <p className={'poppins text-xl p-4'}>{film.name}</p>
                    {playBtn === index ? (
                        <p className={'poppins absolute right-4 bottom-3 z-10 text-lg'}>{film.length}</p>) : ''}
                    <img src={film.img} alt=""
                        className={`absolute bottom-0 left-0 rounded-b-3xl min-h-[68%] max-h-[68%] w-full duration-500 ${playBtn === index ? 'brightness-50' : ''}`} />
                    <div className="absolute bottom-0 w-full z-20 flex justify-center items-center h-[68%]"
                        onMouseOver={() => setPlayBtn(index)} onMouseLeave={() => setPlayBtn()}>
                        {playBtn === index ? (<img src="icons8-play-100.png" alt="" className={'w-[60px]'} />) : ''}
                    </div>
                    <div className="w-10 h-10 absolute bottom-0 z-30" onMouseOver={() => setPlayBtn(index)} onMouseLeave={() => setPlayBtn()}
                        onClick={() => dispatch(actionFavouritePlaylist(film))}>
                        {playBtn === index && (
                            <div className="w-full h-full flex items-center justify-center">
                                {!favouritePlaylist.find(item => item.id === film.id) ?
                                    <img src='icons8-heart-100.png' className='w-4/6' /> :
                                    <img src='icons8-heart-filled-100.png' className='w-4/6' />}
                            </div>
                        )}
                    </div>
                    <div className="w-10 h-10 absolute bottom-0 left-10 z-30" onMouseOver={() => setPlayBtn(index)} onMouseLeave={() => setPlayBtn()}
                        onClick={() => dispatch(actionSeeLaterPlaylist(film))}>
                        {playBtn === index && (
                            <div className="w-full h-full flex items-center justify-center">
                                {!seeLaterPlaylist.find(item => item.id === film.id) ?
                                    <img src='icons8-folder-100.png' className='w-4/6' /> :
                                    <img src='icons8-folder-filled-100 .png' className='w-4/6' />}
                            </div>
                        )}
                    </div>
                </div>
            })}
            {seeLaterPlaylist.length === 0 ?
                <div className={'text-slate-500 poppins flex h-[90vh] w-full items-center justify-center flex-col'}>
                    No delayed yet <img src="icons8-sad-ghost-100.png" alt="" className='w-20' />
                </div> : ''}
        </div>
    );
};

export default Playlist