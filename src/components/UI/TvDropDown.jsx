import React from 'react';

const TvDropDown = () => {
    return (
        <div className={'w-full h-full'}>
            <ul className={'flex h-full flex-col justify-evenly hover:cursor-pointer'}>
                <li className={'px-2 flex items-center hover:bg-slate-700 duration-500 h-14'}>Online</li>
                <hr/>
                <li className={'px-2 flex items-center hover:bg-slate-700 duration-500 h-14'}>News</li>
                <hr/>
                <li className={'px-2 flex items-center hover:bg-slate-700 duration-500 h-14'}>Sport</li>
            </ul>
        </div>
    );
};

export default TvDropDown;