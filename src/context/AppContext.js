import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

//update the state base on the action
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
        case 'SET-EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };

        case 'SET_INCOME':
            return {
                ...state,
                income: action.payload,
            };
        default:
            return state;
    }
};
export default AppReducer;

//initial state when the app loads
const initialState = {
    income: 0,
    expenses: [

    ],
};

//creates the context in order to be used in components and use to get the state
export const AppContext = createContext();

// wraps the components we want to give access to the state
// Accepts the children, which are the nested components
export const AppProvider = (props) => {

    //set the app state and take a reducer and an intial state.
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //return the context and pass in the value we want to expose
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
};