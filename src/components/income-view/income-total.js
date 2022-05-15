import React, { useContext } from 'react';
import { AppContext } from "../../context/AppContext";

function Income() {
    const { income } = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            <span>Income <p>$ {income}</p></span>
        </div>
    );
}

export default Income;