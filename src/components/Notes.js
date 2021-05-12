import React, { useState } from 'react';
import styled from 'styled-components'
import { 
    motion, 
    AnimatePresence
} from 'framer-motion';

const SubmitButton = styled.button`
width: 75px;
height: 75px;
    /* padding: 10px 16px; */
    border-radius: 45px;
    font-size: 12px;
    text-align: center;
    margin-right: 15px;
    margin-top: 15px;
    border: none;
    transition-duration: 0.5s;

    background-color: ${props => 
        props.color ? props.color : "grey"
    };

    &:hover {
        background-color: white;
    }

    &:active {
        background-color: ${props => 
            props.color
        }; 
        transition-duration: 0.4s;
    }

   
`;

function Notes ({submitEmotions, color, mood}) {

    const [notes, setNotes] = useState("");

    const handleChange = (e) => {
        setNotes(e);
    }

    const handleSubmit = (notes,e) => {
        e.preventDefault();
        submitEmotions(notes);
        
    }
    const variants = {
        hidden: { 
            scale: .8,
            opacity: 0
        },
        visible: { 
            scale: 1,
            opacity: 1,
            transition: {
                delay: .3
            }
        },
    }
    return (
        <div className="container mt-5">
            <motion.div
                className="container-fluid text-center"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <h2>I'm feeling {mood}</h2>
                <form>
                    <label>
                        Want to go deeper?
                        <br/>
                        <textarea id="notesOnFeeling" onChange={e => handleChange(e.target.value)}/>
                        <br/>
                        <SubmitButton 
                            onClick={e => handleSubmit(notes, e)}
                            color={color}
                        >
                            Submit
                        </SubmitButton>
                    </label>
                </form>
            </motion.div>
        </div>
    );
}

export default Notes;                           