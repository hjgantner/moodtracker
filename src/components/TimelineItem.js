import React from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


const TimelineItem = ({data}) => (
    // <div className="column">
        <OverlayTrigger 
            placement="top"
            overlay={<Tooltip id="button-tooltip-2">{(data.notes && data.insertedAt) ? 
            "Notes: " + data.notes : data.mood}</Tooltip>}
        >
            <div
                className="column p-4"
                style={{backgroundColor: data.color}}
            >
                {/* <button 
                type="button" 
                className="btn btn-lg" 
                >
                </button> */}
            </div>
        </OverlayTrigger>

    // </div>
);

export default TimelineItem;