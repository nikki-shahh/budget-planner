import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

function AddExpense() {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    function onSubmit(event) {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label> Name of expense</label>
                    <input
                        required="required"
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <label> Expense amount</label>
                    <input
                        required="required"
                        type="text"
                        className="form-control"
                        id="cost"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <button type="submit" className="btn btn-secondary mt-3">
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddExpense;