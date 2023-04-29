import React from 'react';
import Carousel from "../UI/Carousel";
import GenreCarousel from "../UI/GenreCarousel";
import WhatToLook from "../UI/WhatToLook";
import Graphics from "../UI/Graphics";
import ChannelsCarousel from "../UI/ChannelsCarousel";

const Main = () => {
    return (
        <div className={'w-full flex mt-8'}>
            <div className="w-full">
                <div className="flex flex-col w-full h-full items-center">
                    <div className="w-full flex justify-center">
                        <Carousel/>
                    </div>
                    <div className="w-full mt-14">
                        <p className={'text-slate-50 text-4xl poppins mt-14'}>Genres</p>
                        <GenreCarousel/>
                    </div>
                    <div className="w-full h-[86vh] mt-14">
                        <WhatToLook/>
                    </div>
                    <div className="w-full h-[50vh] mb-14">
                        <p className={'text-slate-50 text-4xl poppins'}>Channels</p>
                        <ChannelsCarousel/>
                    </div>
                    <div className="w-full h-[50vh] mb-14">
                        <Graphics/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;