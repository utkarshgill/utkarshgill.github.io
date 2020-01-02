import React from 'react';
import './About.scss';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    indexChangeHandler() {
        this.props.his.setState({selected: 1})
    }

    render() {
        return (
                <div className="parent-box">
                    <h3 id="about-greet" >Hi! I'm Utkarsh <span>Gill.</span></h3>
                    <div className="photo" />
                    <div className="intro-brief">
                        <p id="about-content">
                            {`Product Designer & Web-Developer, passionate about solving problems and designing intuitive digital experiences that leave a positive impact on people and the society.\n\nI’m an amateur guitarist, a terrible singer (not being modest) but I like to sing. I prefer indie folk music & yes! I love Prateek Kuhad :3\n\nCurrently pursuing my bachelor’s from IIT Roorkee, I’m a self-learnt designer drawing experiences by solving real world problems for the users around me.`}
                        </p>
                    </div>
                    <p id="quote">Engineer by Qualification, Designer by <span>Choice.</span></p>
                </div>
        )
    }
}

export default About;