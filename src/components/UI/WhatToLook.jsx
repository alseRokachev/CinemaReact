import React from 'react';

const WhatToLook = () => {
    return (
        <div className={'w-full h-2/3 bg-slate-950 overflow-y-hidden relative flex items-center'}>
            <video src="videoplayback.mp4" loop={true} autoPlay={true} className={'absolute w-full h-auto brightness-75'}></video>
            <div className="absolute left-10 bottom-7">
                <p className={'poppins text-4xl text-slate-50'}>Operation Fortune</p>
                <button className={'bg-slate-700 rounded-xl w-40 h-10 mt-4 text-slate-50 poppins hover:bg-slate-600 duration-500'}>Watch</button>
            </div>
        </div>
    );
};

export default WhatToLook;