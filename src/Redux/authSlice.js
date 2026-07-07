import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "auth",

    initialState: {
        currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
    },

    reducers: {
        login(state, action) {
            state.currentUser = action.payload;

            localStorage.setItem(
                "currentUser",
                JSON.stringify(action.payload)
            );
        },

        logout(state) {
            state.currentUser = null;

            localStorage.removeItem("currentUser");
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;



















// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name : 'auth',

//     initialState : {
//         currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
//     },

//     reducers : {
//         login(state, action) {
//             state.currentUser = action.payload

//             localStorage.setItem("currentUser", JSON.stringify(action.payload))

//         },

//         logout(state){
//             state.currentUser = null;

//             localStorage.removeItem('currenUser')
//         }
//     }
// })

// export const {login, logout} = authSlice.actions
// export default authSlice.reducer