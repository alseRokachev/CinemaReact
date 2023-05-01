import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./Films";
import searchReducer from './Search'
import playlistsReducer from './Playlists'

export default configureStore({
    reducer: {
        filmsStore: filmsReducer,
        searchValue: searchReducer,
        playlists: playlistsReducer
    }
})

