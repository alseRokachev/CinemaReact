import React, { useState } from 'react';
import CategoriesDropDown from "./CategoriesDropDown";
import PlaylistsDropDown from "./PlaylistsDropDown";
import TvDropDown from "./TvDropDown";
import { useDispatch } from "react-redux";
import { changeValue } from "../../store/Search";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const [activeInput, setActiveInput] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [categoriesDropdown, setCategoriesDropdown] = useState(false)
    const [newestDropdown, setNewestDropdown] = useState(false)
    const [tvDropdown, setTVDropdown] = useState(false)
    const navigate = useNavigate();

    return (
        <div className={'w-full flex h-14 text-white bg-slate-950 relative z-50'}>
            <div className="flex items-center justify-start w-1/2 h-full poppins text-xl" onClick={() => {
                setCategoriesDropdown(false)
                setNewestDropdown(false)
                setTVDropdown(false)
            }}>
                <div className="text-xl mr-3">
                    <NavLink to={'/'}><span className={'text-red-600 text-2xl'}>M</span>ultiplex</NavLink>
                </div>
                <div className="relative w-4/5 h-3/4 flex items-center">
                    <div className="h-full w-full flex items-center">
                        <input type="text"
                            className={`px-8 bg-transparent duration-500 outline-none h-full border-b 
                           border-slate-400 text-sm ${activeInput ? 'opacity-100 w-full' : 'opacity-0 w-0'}`}
                            placeholder={'Search'}
                            onInput={(event) => {
                                setInputValue(event.currentTarget.value)
                                dispatch(changeValue(event.currentTarget.value))
                            }}
                            value={inputValue}
                        />
                        <img src="icons8-macos-close-100.png" alt=""
                            className={`absolute right-0 w-8 duration-700 hover:cursor-pointer 
                        ${activeInput ? 'opacity-100 block' : 'opacity-0 hidden'}`} onClick={() => {
                                setInputValue('')
                                dispatch(changeValue(''))
                            }} />
                    </div>
                    <img src="icons8-search-100.png" alt="" className={"absolute w-6 left-0 hover:cursor-pointer"}
                        onClick={() => {
                            setActiveInput(!activeInput)
                            activeInput ? navigate('/') : navigate('/search');
                        }} />
                </div>
            </div>
            <div className=""></div>
            <div className="flex items-center justify-evenly w-1/2 h-full poppins text-md relative" onClick={() => {
                setActiveInput(false)
                setInputValue('')
                dispatch(changeValue(''))
            }}>
                <div
                    className={`w-1/4 h-full sticky text-slate-400`}
                    onClick={() => {
                        setCategoriesDropdown(!categoriesDropdown)
                        setNewestDropdown(false)
                        setTVDropdown(false)
                    }}>
                    <div
                        className="flex items-center justify-center z-40 bg-slate-950 sticky h-full hover:cursor-pointer">Categories
                    </div>
                    <div
                        className={`absolute bg-slate-900 w-full left-11.5 duration-500 ${categoriesDropdown ? 'top-14' : '-top-72'}`}>
                        <CategoriesDropDown />
                    </div>
                </div>
                <div
                    className={`w-1/4 h-full sticky text-slate-400`}
                    onClick={() => {
                        setNewestDropdown(!newestDropdown)
                        setCategoriesDropdown(false)
                        setTVDropdown(false)
                    }}>
                    <div
                        className="flex items-center justify-center z-40 bg-slate-950 sticky h-full hover:cursor-pointer">Playlists
                    </div>
                    <div
                        className={`absolute bg-slate-900 w-full left-11.5 duration-500 ${newestDropdown ? 'top-14' : '-top-72'}`}>
                        <PlaylistsDropDown />
                    </div>
                </div>
                <div
                    className={`w-1/4 h-full sticky text-slate-400`}
                    onClick={() => {
                        setTVDropdown(!tvDropdown)
                        setNewestDropdown(false)
                        setCategoriesDropdown(false)
                    }}>
                    <div
                        className="flex items-center justify-center z-40 bg-slate-950 sticky h-full hover:cursor-pointer">TV
                    </div>
                    <div
                        className={`absolute bg-slate-900 w-full left-11.5 duration-500 ${tvDropdown ? 'top-14' : '-top-72'}`}>
                        <TvDropDown />
                    </div>
                </div>
            </div>
        </div>);
};

export default Header;