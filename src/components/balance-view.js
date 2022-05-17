import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Balance() {
    const { expenses, income } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    return (
        <div className="alert alert-secondary">
            <span>Balance <p>$ {income - totalExpenses}</p></span>
        </div>
    );
}

export default Balance;