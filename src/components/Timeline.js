import React, { useEffect, useState } from 'react';
import TimelineItem from './TimelineItem';
import TimelineDay from './TimelineDay';



export default function Timeline ({history, userName}) {


    const [dateSet, setDateSet] = useState(new Set());

    useEffect(() => {



        setUniqueDates(history)
        return () => {
            
        }
    }, [history])

    function setUniqueDates(moods) {
       
        console.log(moods);
        var dates = moods.map(elem => {
            return elem.insertedAt.split('T')[0];
        });        
        setDateSet(new Set(dates));
    }

    return (
        <div className="container text-center">
           

            {
                [...dateSet].map( date => (
                    
                        <TimelineDay
                        day={date}
                        data= {
                            history.filter( mood => {
                                let elementDate = mood.insertedAt.split('T')[0];
                                return elementDate === date;
                            })
                        }
                    />
                ))
               
                       
            }
           
            
                {/* {
                    history.map( element => 
                        <TimelineItem 
                            data={element}
                        />
                    )
                } */}
            
        </div>
    );
}