import { createSlice } from "@reduxjs/toolkit";



const playlists = createSlice({
    name: 'playlists',
    initialState: {
        favourite: [],
        seeLater: []
    },
    reducers: {
        actionFavouritePlaylist(state, action) {
            state.favourite.find(item => item.id === action.payload.id) ?
            state.favourite = state.favourite.filter(item => item.id != action.payload.id) :
            state.favourite.push(action.payload)
        },
        actionSeeLaterPlaylist(state, action) {
            state.seeLater.find(item => item.id === action.payload.id) ?
            state.seeLater = state.seeLater.filter(item => item.id != action.payload.id) :
            state.seeLater.push(action.payload)
        }
    }
})

export default playlists.reducer;
export const { actionFavouritePlaylist,actionSeeLaterPlaylist } = playlists.actions