import React from 'react';
import ExpenseItem from './expence-item';

function ExpensesList() {
    const expenses = [
        { id: 12, name: 'Ice Cream', cost: 20 },
        { id: 13, name: 'Lunch', cost: 100 },
        { id: 14, name: 'Groccery Shopping', cost: 150 },
    ];
    return (
        <ul className='list-group-flush'>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />))}
        </ul>
    );
}

export default ExpensesList;