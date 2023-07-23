import React from 'react';
import '../estilos/App.css';

const Note = ({ title, description, important }) => {
    return (
        <div className={`note ${important ? 'important' : ''}`}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Note;
