import React from 'react';

const CategoriesDropDown = () => {
    return (
        <div className={'w-full h-full'}>
            <ul className={'flex h-full flex-col justify-evenly hover:cursor-pointer'}>
                <li className={'px-2 flex items-center hover:bg-slate-700 duration-500 h-14'}>Films</li>
                <hr/>
                <li className={'px-2 flex items-center hover:bg-slate-700 duration-500 h-14'}>Serials</li>
                <hr/>
                <li className={'px-2 flex items-center hover:bg-slate-700 duration-500 h-14'}>Cartoons</li>
                <hr/>
                <li className={'px-2 flex items-center hover:bg-slate-700 duration-500 h-14'}>TV shows</li>
            </ul>
        </div>
    );
};

export default CategoriesDropDown;