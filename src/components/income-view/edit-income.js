import React, { useState } from 'react';

function EditIncome(props) {
    const [value, setValue] = useState(props.income);
    return (
        <>
            <input
                required='required'
                type='number'
                className='form-control mr-3'
                id='name'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type='button'
                className='btn'
                onClick={() => props.handleSaveClick(value)}
            >
                Save
            </button>
        </>
    );
};

export default EditIncome;