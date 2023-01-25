import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '',
    transactionAmount: '',
    transactionType: '',
  },
];

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,

  reducers: {
    addTransaction: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(transactionAmount, transactionType) {
        return {
          payload: {
            id: Math.floor(Math.random() * 800000000),
            transactionAmount,
            transactionType,
          },
        };
      },
    },
    showRemainingBalance(state, action) {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
      }
    },
  },
});
export const selectAllTransactions = (state) => state.transactions;
export const { addTransaction, showRemainingBalance } =
  transactionSlice.actions;
export default transactionSlice.reducer;
