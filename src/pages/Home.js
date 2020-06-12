import React from 'react'
import TextLoop from "react-text-loop";
import { projects } from '../project_data';

function Home (props) {

    return(
        <div className="home-container">
            <span className="greet content--fixed">Hi! I'm <TextLoop
                                                springConfig={{stiffness: 300, damping: 20}}
                                                interval={5400}>
                                                <span>a <TextLoop 
                                                            springConfig={{stiffness: 300, damping: 20}}
                                                            interval={1800}>
                                                            <span className="red">Designer!</span>
                                                            <span className="blue">Developer?</span>
                                                            <span className="purple">Unicorn!?</span>
                                                        </TextLoop>
                                                </span>
                                                <span className="gradient">Utkarsh Gill.</span>
                                            </TextLoop>
            </span>
            <p className="intro">Product Designer & Web-Developer, passionate about solving problems and designing intuitive digital experiences that leave a positive impact on people and the society.</p> 
            <p id="comment-mobile">Swipe to view my work</p>
           
        </div>
    )
}

export default Home