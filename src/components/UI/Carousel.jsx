import React, {useState} from 'react';
import {useSelector} from "react-redux";
const Carousel = () => {
    let carouselFilms = useSelector(state => state.filmsStore.films)
    carouselFilms = carouselFilms.filter((film,index) => index > carouselFilms.length - 9)
    const [activeCarouselItem, setActiveCarouselItem] = useState(0)

    return (
        <div className={'w-11/12'}>
            <div className="w-full flex justify-center relative">
                <div className={'w-full flex justify-center relative items-center'}>
                    <img
                        src={activeCarouselItem < 1 ? carouselFilms[carouselFilms.length - 1].img : carouselFilms[activeCarouselItem - 1].img}
                        alt=""
                        className={'absolute -left-3/4 brightness-50 z-20 h-3/4 hover:cursor-pointer hover:animate-pulse'}
                        onClick={() => activeCarouselItem < 1 ? setActiveCarouselItem(carouselFilms.length - 1) : setActiveCarouselItem(prevState => prevState - 1)}/>
                    <div className="w-full h-full z-30 relative">
                        <div
                            className="w-full h-full absolute bg-gradient-to-t from-slate-950 from-15% to-transparent -bottom-2"></div>
                        <img src={carouselFilms[activeCarouselItem].img} alt=""
                             className={'w-full h-auto'}/>
                        <p className={'absolute bottom-20 left-10 text-slate-50 poppins text-7xl'}>{carouselFilms[activeCarouselItem].name}</p>
                        <p className={'absolute bottom-10 left-10 text-slate-50 poppins text-xl'}>
                            {carouselFilms[activeCarouselItem].director}
                        </p>
                    </div>
                    <img
                        src={activeCarouselItem > carouselFilms.length - 2 ? carouselFilms[0].img : carouselFilms[activeCarouselItem + 1].img}
                        alt=""
                        className={'absolute -right-3/4 brightness-50 z-20 h-3/4 hover:cursor-pointer hover:animate-pulse'}
                        onClick={() => activeCarouselItem > carouselFilms.length - 2 ? setActiveCarouselItem(0) : setActiveCarouselItem(prevState => prevState + 1)}/>
                </div>
                <div className="absolute bottom-3 flex w-1/6 justify-between z-30">
                    <div
                        className={`w-4 h-4 rounded-full hover:cursor-pointer ${activeCarouselItem === 0 ? 'bg-neutral-300 animate-pulse' : 'bg-slate-500'}`}
                        onClick={() => setActiveCarouselItem(0)}></div>
                    <div
                        className={`w-4 h-4 rounded-full hover:cursor-pointer ${activeCarouselItem === 1 ? 'bg-neutral-300 animate-pulse' : 'bg-slate-500'}`}
                        onClick={() => setActiveCarouselItem(1)}></div>
                    <div
                        className={`w-4 h-4 rounded-full hover:cursor-pointer ${activeCarouselItem === 2 ? 'bg-neutral-300 animate-pulse' : 'bg-slate-500'}`}
                        onClick={() => setActiveCarouselItem(2)}></div>
                    <div
                        className={`w-4 h-4 rounded-full hover:cursor-pointer ${activeCarouselItem === 3 ? 'bg-neutral-300 animate-pulse' : 'bg-slate-500'}`}
                        onClick={() => setActiveCarouselItem(3)}></div>
                    <div
                        className={`w-4 h-4 rounded-full hover:cursor-pointer ${activeCarouselItem === 4 ? 'bg-neutral-300 animate-pulse' : 'bg-slate-500'}`}
                        onClick={() => setActiveCarouselItem(4)}></div>
                    <div
                        className={`w-4 h-4 rounded-full hover:cursor-pointer ${activeCarouselItem === 5 ? 'bg-neutral-300 animate-pulse' : 'bg-slate-500'}`}
                        onClick={() => setActiveCarouselItem(5)}></div>
                    <div
                        className={`w-4 h-4 rounded-full hover:cursor-pointer ${activeCarouselItem === 6 ? 'bg-neutral-300 animate-pulse' : 'bg-slate-500'}`}
                        onClick={() => setActiveCarouselItem(6)}></div>
                    <div
                        className={`w-4 h-4 rounded-full hover:cursor-pointer ${activeCarouselItem === 7 ? 'bg-neutral-300 animate-pulse' : 'bg-slate-500'}`}
                        onClick={() => setActiveCarouselItem(7)}></div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
