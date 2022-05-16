import React, { useState, useContext } from 'react';
import Income from './income-total';
import EditIncome from './edit-income';
import { AppContext } from '../../context/AppContext';

function Incomes() {
    const { income, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_INCOME',
            payload: value,
        });
        setIsEditing(false);
    };

    return (
        <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
            {isEditing ? (
                <EditIncome handleSaveClick={handleSaveClick} income={income} />
            ) : (
                <Income handleEditClick={handleEditClick} income={income} />
            )}
        </div>
    );
};

export default Incomes;