import { createSlice } from "@reduxjs/toolkit";

const attendenceSlice = createSlice({
    name: 'attendence',

    initialState: {
        attendences: JSON.parse(localStorage.getItem('attendences')) || []
    },

    reducers: {
        addAttendence(state, action) {
            const index = state.attendences.findIndex(
                attendance =>
                    attendance.studentId === action.payload.studentId &&
                    attendance.date === action.payload.date
            );

            if (index === -1) {
                state.attendences.push(action.payload);
            } else {
                state.attendences[index].status = action.payload.status;
            }

            localStorage.setItem(
                "attendences",
                JSON.stringify(state.attendences)
            );
        },




    }
})

export const { addAttendence, deleteAttendence } = attendenceSlice.actions
export default attendenceSlice.reducer