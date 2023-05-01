import React from 'react';
import { useNavigate } from "react-router-dom";

const PlaylistsDropDown = () => {
    const navigate = useNavigate();
    return (
        <div className={'w-full h-full'}>
            <ul className={'flex h-full flex-col justify-evenly hover:cursor-pointer'}>
                <li className={'px-2 flex items-center hover:bg-slate-700 duration-500 h-14'} onClick={() => navigate('/seeLater')}>See later</li>
                <hr />
                <li className={'px-2 flex items-center hover:bg-slate-700 duration-500 h-14'} onClick={() => navigate('/favourite')}>Favourite</li>
            </ul>
        </div>
    );
};

export default PlaylistsDropDown;