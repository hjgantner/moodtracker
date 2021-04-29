import React, { useState } from 'react';

function Notes ({submitEmotions}) {

    const [notes, setNotes] = useState("");

    const handleChange = (e) => {
        setNotes(e);
    }

    return (
        <form>
            <label>
                Want to go deeper?
                <br/>
                <textarea id="notesOnFeeling" onChange={e => handleChange(e.target.value)}/>
                <br/>
                <input type="submit" value="Submit" onClick={e => submitEmotions(notes)} />
            </label>
        </form>
    );
}

export default Notes;                           