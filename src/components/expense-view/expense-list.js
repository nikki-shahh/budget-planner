import React, { useContext } from 'react';
import ExpenseItem from './expence-item';
import { AppContext } from '../../context/AppContext';
function ExpensesList() {
    const { expenses } = useContext(AppContext);
    return (
        <ul className='list-group-flush'>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />))}
        </ul>
    );
}

export default ExpensesList;