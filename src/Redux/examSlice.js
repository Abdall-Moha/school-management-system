import { createSlice } from "@reduxjs/toolkit";

const ExamSlice = createSlice({
    name : 'exam',

    initialState: {
        exams: JSON.parse(localStorage.getItem('exams')) || []
    },

    reducers: {
        addExam(state, action){
            state.exams.push(action.payload)

            localStorage.setItem('exams', JSON.stringify(state.exams))
        },

        deleteExam(state, action){
            state.exams = state.exams.filter(exam => exam.id !== action.payload)

            localStorage.setItem('exams', JSON.stringify(state.exams))
        },

        

        
    }
})

export const {addExam, deleteExam} = ExamSlice.actions
export default ExamSlice.reducer