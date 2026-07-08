import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',

    initialState: {
        users: JSON.parse(localStorage.getItem('users')) || []
    },

    reducers: {
        addUser(state, action){
            state.users.push(action.payload)

            localStorage.setItem('users', JSON.stringify(state.users))
        },

        deleteUser(state, action){
            state.users = state.users.filter(user => user.id !== action.payload)

            localStorage.setItem('users', JSON.stringify(state.users))
        },
        updateUser(state, action){
            const index = state.users.findIndex(user => user.id === action.payload.id)

            if(index !== -1){
                state.users[index] = action.payload

                localStorage.setItem('users', JSON.stringify(state.users))
            }
        }

        

        
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions
export default userSlice.reducer
