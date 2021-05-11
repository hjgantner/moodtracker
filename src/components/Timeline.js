import React from 'react';
import TimelineItem from './TimelineItem';
import { 
    motion
} from 'framer-motion';

export default function Timeline ({history, userName}) {
    console.log("moods in Timeline: ", history);

    const dateSet = new Set();

    function createUniqueDates(dates) {
        // for(let i = 0; i < dates.length; i++) {
        //     if()
        // }
    }
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
        
        <div className="container text-center">
            <div className="container"></div>
            <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={transition}
                >
            {
                history.filter( element => {

                })
            }
            <div className="d-inline-flex row">
            
                {
                    history.map( element => 
                        <TimelineItem 
                            data={element}
                        />
                    )
                }
            </div>
            </motion.div>
        </div>
    );
}