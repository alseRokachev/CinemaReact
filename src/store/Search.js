import {createSlice} from "@reduxjs/toolkit";

const searchValue = createSlice({
    name: 'searchValue',
    initialState: {
        inputValue: ''
    },
    reducers: {
        changeValue(state,action) {
            state.inputValue = action.payload
        }
    }
})

export default searchValue.reducer;
export const{changeValue} = searchValue.actions;
