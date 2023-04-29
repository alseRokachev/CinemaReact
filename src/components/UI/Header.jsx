import React, {useState} from 'react';
import CategoriesDropDown from "./CategoriesDropDown";
import NewestDropDown from "./NewestDropDown";
import TvDropDown from "./TvDropDown";

const Header = () => {
    const [activeInput, setActiveInput] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [categoriesDropdown, setCategoriesDropdown] = useState(false)
    const [newestDropdown, setNewestDropdown] = useState(false)
    const [tvDropdown, setTVDropdown] = useState(false)

    return (
        <div className={'w-full flex h-14 text-white bg-slate-950 relative z-50'}>
            <div className="flex items-center justify-between w-1/2 h-full poppins text-xl">
                <div className="">
                    <span className={'text-red-600 text-2xl'}>M</span>ultiplex
                </div>
                <div className="w-5/6 relative h-3/4 flex items-center">
                    <div className="w-full h-full flex items-center">
                        <input type="text"
                               className={`pl-8 bg-transparent duration-500 outline-none h-full border-b 
                           border-slate-400 text-sm ${activeInput ? 'opacity-100 w-full' : 'opacity-0 w-0'}`}
                               placeholder={'Search'}
                               onInput={(event) => setInputValue(event.currentTarget.value)}
                               value={inputValue}
                        />
                        <img src="icons8-macos-close-100.png" alt=""
                             className={`absolute right-0 w-8 duration-700 hover:cursor-pointer 
                        ${activeInput ? 'opacity-100 block' : 'opacity-0 hidden'}`} onClick={() => setInputValue('')}/>
                    </div>
                    <img src="icons8-search-100.png" alt="" className={"absolute w-6 left-0 hover:cursor-pointer"}
                         onClick={() => setActiveInput(!activeInput)}/>
                </div>
            </div>
            <div className=""></div>
            <div className="flex items-center justify-evenly w-1/2 h-full poppins text-md relative">
                <div
                    className={`w-1/4 h-full sticky text-slate-400`}
                    onClick={() => {
                        setCategoriesDropdown(!categoriesDropdown)
                        setNewestDropdown(false)
                        setTVDropdown(false)
                    }}>
                    <div className="flex items-center justify-center z-40 bg-slate-950 sticky h-full hover:cursor-pointer">Categories</div>
                    <div
                        className={`absolute bg-slate-900 w-full left-11.5 duration-500 ${categoriesDropdown ? 'top-14' : '-top-72'}`}>
                        <CategoriesDropDown/>
                    </div>
                </div>
                <div
                    className={`w-1/4 h-full sticky text-slate-400`}
                    onClick={() => {
                        setNewestDropdown(!newestDropdown)
                        setCategoriesDropdown(false)
                        setTVDropdown(false)
                    }}>
                    <div className="flex items-center justify-center z-40 bg-slate-950 sticky h-full hover:cursor-pointer">Newest</div>
                    <div
                        className={`absolute bg-slate-900 w-full left-11.5 duration-500 ${newestDropdown ? 'top-14' : '-top-72'}`}>
                        <NewestDropDown/>
                    </div>
                </div>
                <div
                    className={`w-1/4 h-full sticky text-slate-400`}
                    onClick={() => {
                        setTVDropdown(!tvDropdown)
                        setNewestDropdown(false)
                        setCategoriesDropdown(false)
                    }}>
                    <div className="flex items-center justify-center z-40 bg-slate-950 sticky h-full hover:cursor-pointer">TV</div>
                    <div
                        className={`absolute bg-slate-900 w-full left-11.5 duration-500 ${tvDropdown ? 'top-14' : '-top-72'}`}>
                        <TvDropDown/>
                    </div>
                </div>
            </div>
        </div>);
};

export default Header;