import React, { useContext } from "react";
import { AppContext } from '../../context/AppContext';
import { RiDeleteBin6Line, RiCheckboxBlankCircleLine } from "react-icons/ri";

function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext);

    function handleDeleteExpense() {
        dispatch({
            type: 'DELETE-EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <p className="mt-3">
                <span> <RiCheckboxBlankCircleLine></RiCheckboxBlankCircleLine> </span>
                {props.name}
            </p>
            <div>
                <span>
                    ${props.cost}
                </span>
                <div>
                    EDIT
                </div>
                <RiDeleteBin6Line onClick={handleDeleteExpense}></RiDeleteBin6Line>
            </div>

        </li>
    );
}

export default ExpenseItem;