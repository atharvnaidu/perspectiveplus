// src/components/StatusBox.jsx
import React from 'react';

const StatusBox = ({ isTrue }) => {
    return (
        <div className={`status-box ${isTrue ? 'true' : 'false'}`}>
            {isTrue ? "True" : "False"}
        </div>
    );
};

export default StatusBox;
