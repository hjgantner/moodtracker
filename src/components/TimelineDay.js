const TimelineDay = ({data}) => (

    data.map( element => 
        <TimelineItem 
            data={element}
        />
    )

);

export default TimelineDay;
