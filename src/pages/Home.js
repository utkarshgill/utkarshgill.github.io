import React from 'react';
import icon from '../icons/keyboard_arrow_down-24px.svg';
import './Home.scss';
import Typist from 'react-typist';
import './Typist.css';
import $ from 'jquery';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toWork: false
        }

    }

    render() {
        return (
            <div className="parent-box" >
                    <Typist show={false} className="greet-section"
                            avgTypingDelay={55} 
                            stdTypingDelay={40}
                            startDelay={1000}       
                    >
                        <h1 className="greet">Hi! I'm</h1>
                        <h1 className="name">a <span>Designer!</span>
                        <Typist.Backspace count={7} delay={500} />
                        <Typist.Delay ms={500} />
                        <span>veloper?</span>
                        <Typist.Backspace count={10} delay={500} />
                        <Typist.Delay ms={500} />
                        <span>Unicorn!?</span>
                        <Typist.Backspace count={11} delay={500} />
                        <Typist.Delay ms={500} />Utkarsh <span>Gill<Typist.Delay ms={1000} />.</span></h1>
                    </Typist>
                <p id="intro1">Product Designer & Web-Developer, passionate about solving problems
                    and designing intuitive digital experiences that leave
                        a positive impact on people and the society.</p>
                <div className="hover-listener">
                    <text id="comment">SCROLL TO SEE MY WORK</text>
                    <img id="down-arrow" src={icon} alt="down" />
                </div>
            </div>
        )
    }
}

export default Home;