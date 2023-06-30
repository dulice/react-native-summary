import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        deleteUser : (state) => {
            state.user = null
        }
    }
});

export const { setUser, deleteUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
