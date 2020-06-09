import React from 'react'
import TextLoop from "react-text-loop";

function Home (props) {

    return(
        <div className="home-container">
            <span className="greet">Hi! I'm <TextLoop
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
            <div className="hover-listener" onClick = {() => props.moveDown()}>
                <svg id="down-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="down-path" d="M10.0001 10.9766L14.1251 6.85156L15.3034 8.0299L10.0001 13.3332L4.69678 8.0299L5.87511 6.85156L10.0001 10.9766Z" fill="black"/>
                </svg>
                <p id="comment">Scroll to view my work</p>
            </div>
        </div>
    )
}

export default Home