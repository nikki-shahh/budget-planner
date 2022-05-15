import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AppReducer(state, action) {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE-EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            }
        default:
            return state;
    }
}
const initialState = {
    income: 3000,
    expenses: [
        { id: uuidv4(), name: 'Gas', cost: 90 },
        { id: uuidv4(), name: 'Gift', cost: 100 },
        { id: uuidv4(), name: 'Coffee', cost: 5 },
    ],
};
export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider
            value={{
                income: state.income,
                expenses: state.expenses,
                dispatch,

            }}>
            {props.children}
        </AppContext.Provider>
    );
}