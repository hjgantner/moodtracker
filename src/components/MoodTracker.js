import React, { Component } from 'react';
import Emotion from  './Emotion';
import Notes from  './Notes';
import '../css/MoodTracker.css';
import { 
    motion, 
    AnimatePresence
} from 'framer-motion';


class MoodTracker extends Component {


    handleChangeComplete = (color) => {

        this.setState({background : color.hex})
    };

    handleChange(color, event) {
        console.log("color: ", color);
        console.log("event: ", event);
    }

    

    render() {
        const variants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        }
        return (

            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
            >

                <div 
                    className="jumbotron text-center"
                    
                >
                    {this.props.username !== "" ? 
                        <h1>What's going on {this.props.username}</h1>
                        : <h1>Please enter a username</h1>
                    }

                    {this.props.moods.map(mood => (
                        <Emotion 
                            emotion={mood}
                            changeMood={this.props.changeMood}
                        />
                    ))}
                </div>
                {
                    this.props.mood ? 
                        
                        <Notes
                            submitEmotions={this.props.submitEmotions}
                            color={this.props.color}
                            mood={this.props.mood}
                        />
                    :
                    null
                }
            </motion.div>


        );
    }

};

export default MoodTracker;