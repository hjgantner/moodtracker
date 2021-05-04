

const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <li 
                className="list-inline-item"
                style={{backgroundColor: element.color}}
            >
                <OverlayTrigger 
                    placement="top"
                    overlay={<Tooltip id="button-tooltip-2">{(data.notes && data.insertedAt) ? 
                        "At: " + data.insertedAt + "\n" + data.notes : data.mood}</Tooltip>}
                >
                    <button 
                        type="button" 
                        className="btn btn-lg" 
                    >
                    </button>
                </OverlayTrigger>
            </li>
        </div>
    </div>
);

export default TimelineItem;

