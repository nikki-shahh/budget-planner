import React from 'react';

function AddExpense() {
    return (
        <form>
            <div className="row">
                <div className="col-sm">
                    <label for="name"> Name of expense</label>
                    <input
                        required="required"
                        type="text"
                        className="form-control"
                        id="name"
                    ></input>
                </div>
                <div className="col-sm">
                    <label for="cost"> Expense amount</label>
                    <input
                        required="required"
                        type="text"
                        className="form-control"
                        id="cost"
                    ></input>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <button type="submit" className="btn btn-secondary mt-3">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddExpense;