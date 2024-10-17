import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    status: false,
    userData: false
}

const authSlice = createSlice({
    name: "auth",
    initalState,
    reducers: {
        login : (state ,action) => {
            state.status  = true ;
            state.userData = action.payload.userData;
        },
        logout : (state) => {
            state.status = true;
            state.userData = null;
        }
    }
})


export const {login ,logout} = authSlice.actions

export default authSlice.reducer