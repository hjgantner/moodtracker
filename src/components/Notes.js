import React, { useState } from 'react';

function Notes ({submitEmotions}) {

    const [notes, setNotes] = useState("");

    const handleChange = (e) => {
        setNotes(e);
    }

    const handleSubmit = (notes,e) => {
        e.preventDefault();
        submitEmotions(notes);
    }

    return (
        <div>
            <form>
                <label>
                    Want to go deeper?
                    <br/>
                    <textarea id="notesOnFeeling" onChange={e => handleChange(e.target.value)}/>
                    <br/>
                    <button onClick={e => handleSubmit(notes, e)}>Submit</button>
                </label>
            </form>
        </div>
    );
}

export default Notes;                           