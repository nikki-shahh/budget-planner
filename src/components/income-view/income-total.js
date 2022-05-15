import React, { useContext } from 'react';
import { AppContext } from "../../context/AppContext";

function Income(props) {
    const { income } = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            <span>Income
                $ {income}
                <button type='button' class='btn' onClick={props.handleEditClick}>
                    Edit
                </button>
            </span>

        </div>
    );
}

export default Income;