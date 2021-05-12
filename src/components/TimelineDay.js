import React from 'react';
import TimelineItem from './TimelineItem';
import { 
    motion
} from 'framer-motion';

const TimelineDay = ({day, data}) => {

    const variants = { 
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const transition = {
        type: "spring",
        duration: 2.3,
        stiffness: 30,
    }
    return (
        
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
        >
        <div className="d-flex flex-column mt-5">
            <div className="d-flex row">
                <h4>{day}</h4>
            </div>
            <div className="d-flex row">
                {
                    data.map( element => 
                        <TimelineItem 
                            data={element}
                        />
                    )
                }
            </div>
        </div>

            
        </motion.div>
    );
};

export default TimelineDay;
