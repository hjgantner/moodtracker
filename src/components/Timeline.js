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



                                
                            </li>                        
                    )
                }
            </ul>
        </div>
    );
}