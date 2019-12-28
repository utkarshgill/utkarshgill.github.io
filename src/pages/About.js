import React from 'react';
import './About.scss';

class About extends React.Component {
    render() {
        if(this.props.status===1) {
        return (
                <div className="parent-box">
                    <h3>Hi! I'm Utkarsh Gill</h3>
                    <div className="photo" />
                    <div className="intro-brief">
                        <p>
                            Product Designer, passionate about solving problems 
                        and designing intuitive digital experiences that leave 
                        a positive impact on people and the society.
                        </p>
                        <p>
                        I’m an amateur guitarist, a terrible singer (not being 
                        modest) but I like to sing. I prefer indie folk music &
                        yes! I love Prateek Kuhad :3
                        </p>
                        <p>
                        Currently pursuing my bachelor’s from IIT Roorkee, 
                        I’m a self-learnt designer drawing experiences by 
                        solving real world problems for the users around me.
                        </p>
                        <p id="quote">
                        Engineer by Qualification, Designer by Choice.
                        </p>
                    </div>
                </div>
        )}
        return null;
    }
}

export default About;