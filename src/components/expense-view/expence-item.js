import React from "react";
import { RiDeleteBin6Line, RiCheckboxBlankCircleLine } from "react-icons/ri";

function ExpenseItem(props) {
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
                <RiDeleteBin6Line></RiDeleteBin6Line>
            </div>

        </li>
    );
}

export default ExpenseItem;