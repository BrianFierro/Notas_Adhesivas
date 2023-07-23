import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [important, setImportant] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() === '') {
            alert('La descripción no puede estar vacía');
            return;
        }
        addNote({
            title,
            description,
            important,
        });
        setTitle('');
        setDescription('');
        setImportant(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>
                Importante:
                <input
                    type="checkbox"
                    checked={important}
                    onChange={(e) => setImportant(e.target.checked)}
                />
            </label>
            <button type="button" onClick={handleSubmit}>Agregar Nota</button> {/* Cambiamos el tipo a "button" */}
        </form>
    );
};

export default NoteForm;
