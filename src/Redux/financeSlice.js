import { createSlice } from "@reduxjs/toolkit";

const financeSlice = createSlice({
  name: "finance",

  initialState: {
    finances: JSON.parse(localStorage.getItem("finances")) || [],
  },

  reducers: {
    addFinance(state, action) {
      const index = state.finances.findIndex(
        (finance) => finance.studentId === action.payload.studentId,
      );

      if (index === -1) {
        state.finances.push(action.payload);
      } else {
        state.finances[index].status = action.payload.status;
      }

      localStorage.setItem("finances", JSON.stringify(state.finances));
    },
  },
});

export const { addFinance } = financeSlice.actions;
export default financeSlice.reducer;
