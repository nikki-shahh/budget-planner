import React, { useState, useContext } from 'react';
import TotalIncome from './income-total';
import EditIncome from './edit-income';
import { AppContext } from '../../context/AppContext';

function Income() {
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
        <div>
            {
                isEditing ? (
                    <EditIncome handleSaveClick={handleSaveClick} income={income} />
                ) : (
                    <TotalIncome handleEditClick={handleEditClick} income={income} />
                )
            }
        </div >
    );
};

export default Income;