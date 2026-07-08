import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
    name : 'teacher',

    initialState:{
        teachers: JSON.parse(localStorage.getItem('teachers')) || []
    },

    reducers: {
        addTeacher(state, action){
            state.teachers.push(action.payload)

            localStorage.setItem('teachers', JSON.stringify(state.teachers))
        },
        deleteTeacher(state, action){
            state.teachers = state.teachers.filter(teacher => teacher.id !== action.payload)

            localStorage.setItem('teachers', JSON.stringify(state.teachers))
        },
        updateTeacher(state, action){
            const index = state.teachers.findIndex(teacher => teacher.id === action.payload.id)

            if(index !== -1){
                state.teachers[index] = action.payload

                localStorage.setItem('teachers', JSON.stringify(state.teachers))
            }
        }
    }

})

export const {addTeacher, deleteTeacher, updateTeacher} = teacherSlice.actions;
export default teacherSlice.reducer
