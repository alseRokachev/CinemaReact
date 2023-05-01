import React from 'react';
import Carousel from "../UI/Carousel";
import GenreCarousel from "../UI/GenreCarousel";
import WhatToLook from "../UI/WhatToLook";
import Graphics from "../UI/Graphics";
import ChannelsCarousel from "../UI/ChannelsCarousel";
import SpecialForYouCarousel from "../UI/SpecialForYouCarousel";
import FantasyCarousel from "../UI/FantasyCarousel";
import ActionCarousel from "../UI/ActionCarousel";
import DetectiveCarousel from "../UI/DetectiveCarousel";

const Main = () => {
    return (
        <div className={'w-full h-full flex mt-8'}>
            <div className="w-full h-full">
                <div className="flex flex-col w-full h-full items-center">
                    <div className="w-full flex justify-center">
                        <Carousel/>
                    </div>
                    <div className="w-full mt-14">
                        <p className={'text-slate-50 text-4xl poppins mt-14'}>Genres</p>
                        <GenreCarousel/>
                    </div>
                    <div className="w-full mt-14">
                        <WhatToLook/>
                    </div>
                    <div className="w-full  mb-14">
                        <p className={'text-slate-50 text-4xl poppins'}>Channels</p>
                        <ChannelsCarousel/>
                    </div>
                    <div className="w-full mb-14 h-[50vh]">
                        <Graphics/>
                    </div>
                    <div className="w-full">
                        <p className={'text-slate-50 text-4xl poppins'}>Special for you</p>
                        <SpecialForYouCarousel/>
                    </div>
                    <div className="w-full">
                        <p className={'text-slate-50 text-4xl poppins'}>Fantasy</p>
                        <FantasyCarousel/>
                    </div>
                    <div className="w-full">
                        <p className={'text-slate-50 text-4xl poppins'}>Action</p>
                        <ActionCarousel/>
                    </div>
                    <div className="w-full pb-36">
                        <p className={'text-slate-50 text-4xl poppins'}>Detective</p>
                        <DetectiveCarousel/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;