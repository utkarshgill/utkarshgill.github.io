import React from 'react';
import icon from '../icons/keyboard_arrow_down-24px.svg';
import './Home.scss';

class Home extends React.Component {

    render() {
        if(this.props.status===3) {
        return(
            <div className="parent-box">
                <h1 className="greet">Hi I'm</h1>
                <h1 className="name">Utkarsh Gill</h1>
                <p id="intro1">Product Designer, passionate about solving problems 
                    and designing intuitive digital experiences that leave 
                    a positive impact on people and the society.</p>
                <div className="hover-listener" />
                <img id="down-arrow" src={icon} alt="down"/>  
            </div>
        )}
        return null;
    }
}

export default Home;