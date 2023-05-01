import './App.css';
import Main from "./components/Pages/main";
import Header from "./components/UI/Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Search from "./components/Pages/search";
import PlaylistFavourite from './components/Pages/favourite';
import PlaylistSeeLater from './components/Pages/seeLater'

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen h-full">
        <div className="container px-4 h-full">
            <Header/>
            <Routes>
                <Route path={''} element={<Main/>}/>
                <Route path={'/search'} element={<Search/>}/>
                <Route path={'/favourite'} element={<PlaylistFavourite/>}/>
                <Route path={'/seelater'} element={<PlaylistSeeLater/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
