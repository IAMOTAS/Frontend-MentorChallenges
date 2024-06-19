import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  transactions: [],
  error: null,
  loading: true, // Remove the trailing comma here
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransactions() {
    try {
      const res = await axios.get('transactions');
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.send.data.data // Corrected to res.data.data assuming Axios structure
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {

    try {
      await axios.delete(`/transactions/${id}`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });

    } catch (err) {
       dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: err.response.data.error
      });
    }

    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  async function addTransaction(transaction) {

    const config = {
      headers : {
        'Content-Type':'application/json'
      }
    }

try {
  const res =await axios.post('/transactions', transaction, config);
  dispatch({
    type: 'ADD_TRANSACTION',
    payload: res.data.data
  });
} catch (err) {
  dispatch({
    type: 'TRANSACTIONS_ERROR',
    payload: err.response.data.error
  });
}

   
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      error: state.error,
      loading: state.loading,
      getTransactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
