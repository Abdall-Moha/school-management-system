import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import userReducer from './userSlice'
import studentReducer from './studentSlice'
import teacherReducer from './teacherSlice'
import examReducer from './examSlice'
import attendeceReducer from './AttendenceSlice'

const store = configureStore({
    reducer : {
        auth: authReducer ,
        users: userReducer,
        students: studentReducer,
        teachers: teacherReducer,
        exams: examReducer,
        attendences: attendeceReducer,
    }
})

export default store