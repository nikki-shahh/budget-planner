import React, { useContext } from "react";
import { AppContext } from '../../context/AppContext';
import { RiDeleteBin6Line } from "react-icons/ri";

function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext);

    function handleDeleteExpense() {
        dispatch({
            type: 'DELETE-EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li key={props.id} className='list-group-item d-flex justify-content-between align-items-center'>
            <p className="mt-3">
                <span> <svg stroke="currentColor" fill="#2A8C46" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><circle cx="12" cy="12" r="10"></circle></g></svg> </span>
                {props.name}
            </p>
            <div className="ml-3">
                <span>
                    <span> ${props.cost} </span>
                    {/* <button className="btn"> Edit  </button> */}
                    <RiDeleteBin6Line onClick={handleDeleteExpense}></RiDeleteBin6Line>
                </span>
            </div>

        </li>
    );
}

export default ExpenseItem;