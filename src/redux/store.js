import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./action";

export const Store = configureStore({
    reducer: {
        user: userReducer
    }
});
