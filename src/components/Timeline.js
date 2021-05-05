import React from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


export default function Timeline ({history}) {
    console.log("moods in Timeline: ", history);


    return (
        <div>
            <h1>TIMELINE:</h1>
            <ul className="list-inline">
                {
                    history.map( element => 
                        <li 
                            className="list-inline-item"
                            style={{backgroundColor: element.color}}
                        >
                            <OverlayTrigger 
                                placement="top"
                                overlay={<Tooltip id="button-tooltip-2">{(element.notes && element.insertedAt) ? 
                                    "Notes: " + element.notes : element.mood}</Tooltip>}
                            >
                                <button 
                                    type="button" 
                                    className="btn btn-lg" 
                                >
                                </button>
                            </OverlayTrigger>
                        </li>                       
                    )
                }
            </ul>
        </div>
    );
}