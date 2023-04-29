import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./Films";
export default configureStore({
    reducer: {
        filmsStore: filmsReducer,
    }
})