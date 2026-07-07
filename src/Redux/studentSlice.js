import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name : 'student',

    initialState:{
        students: JSON.parse(localStorage.getItem('students')) || []
    },

    reducers: {
        addStudent(state, action){
            state.students.push(action.payload)

            localStorage.setItem('students', JSON.stringify(state.students))
        },
        deleteStudent(state, action){
            state.students = state.students.filter(student => student.id !== action.payload)

            localStorage.setItem('students', JSON.stringify(state.students))
        },
    }

})

export const {addStudent, deleteStudent} = studentSlice.actions;
export default studentSlice.reducer