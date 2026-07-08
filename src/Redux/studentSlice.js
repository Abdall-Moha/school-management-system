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
        updateStudent(state, action){
            const index = state.students.findIndex(student => student.id === action.payload.id)

            if(index !== -1){
                state.students[index] = action.payload

                localStorage.setItem('students', JSON.stringify(state.students))
            }
        },
    }

})

export const {addStudent, deleteStudent, updateStudent} = studentSlice.actions;
export default studentSlice.reducer
