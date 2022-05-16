import React, { useContext } from "react";
import { RiDeleteBin6Line, RiCheckboxBlankCircleLine } from "react-icons/ri";
import { AppContext } from "../../context/AppContext";

function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext);

    function handleDeleteExpens() {
        dispatch({
            type: 'DELETE-EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <p className="mt-3">
                <RiCheckboxBlankCircleLine></RiCheckboxBlankCircleLine>
                {props.name}
            </p>
            <div>
                <span className="badge-primary badge-pill mr-3">
                    ${props.cost}
                </span>
                <button type='button' className='btn' onClick={props.handleEditClick}>
                    Edit
                </button>
                <RiDeleteBin6Line onClick={handleDeleteExpens}></RiDeleteBin6Line>
            </div>

        </li>
    );
}

export default ExpenseItem;