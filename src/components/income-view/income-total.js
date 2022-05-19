import React from 'react';

function TotalIncome(props) {
    return (
        <div className="alert alert-secondary">
            <span>Income
                ${props.income}
                <br />
                <button type='button' className='btn' onClick={props.handleEditClick}>
                    Edit
                </button>
            </span>

        </div>
    );
}

export default TotalIncome;