import React from 'react';
import icon from '../icons/keyboard_arrow_down-24px.svg';
import './Home.scss';
import $ from 'jquery';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toWork: false
        }
        
    }
    
    render() {
        return(
                <div className="parent-box" >
                    <h1 className="greet">Hi! I'm</h1>
                    <h1 className="name">Utkarsh <span>Gill</span></h1>
                    <p id="intro1">Product Designer & Web-Developer, passionate about solving problems 
                        and designing intuitive digital experiences that leave 
                        a positive impact on people and the society.</p>
                        <div className="hover-listener">
                            <text id="comment">SCROLL TO SEE MY WORK</text>
                            <img id="down-arrow" src={icon} alt="down"/>
                        </div>  
                </div>
        )
    }
}

export default Home;