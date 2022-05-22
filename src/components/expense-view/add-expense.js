import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

function AddExpense(props) {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseFloat(cost),
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
        setName('');
        setCost('');
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
                    <button type="submit" className="btn btn-success btn-lg mt-3" data-toggle="button" aria-pressed="false" autocomplete="off">
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddExpense;