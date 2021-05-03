import React, { useState } from 'react';

function Notes ({submitEmotions}) {

    const [notes, setNotes] = useState("");

    const handleChange = (e) => {
        setNotes(e);
    }

    const handleSubmit = (notes,e) => {
        e.preventDefault();
        console.log(e);
        submitEmotions(notes);
    }

    return (
        <form>
            <label>
                Want to go deeper?
                <br/>
                <textarea id="notesOnFeeling" onChange={e => handleChange(e.target.value)}/>
                <br/>
                <button onClick={e => handleSubmit(notes, e)}>Submit</button>
            </label>
        </form>
    );
}

export default Notes;                           