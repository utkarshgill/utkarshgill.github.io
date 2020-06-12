import React from 'react'
import mypic from '../images/test-ls.jpg'

import { projects } from '../project_data'

class About extends React.Component {
    render() {
        if (projects.length + 1 === this.props.page) {
            this.photo = "about-photo"
            this.heading = "about-head"
            this.subText = "sub-text"
            this.desc = "description"
            this.catch = "catchphrase"
        }
        else {
            this.photo = "about-photo-hidden"
            this.heading = "about-head-hidden"
            this.subText = "sub-text-hidden"
            this.desc = "description-hidden"
            this.catch = "catchphrase-hidden"
        }
        return (
            <div className="about-container">
                <div className="dummy"></div>
                <div id="margin-correction" className="text-container">
                    <div className="text-box">
                        <p id={this.heading} className={"heading gradient"}>The Dank Unicorn?</p>
                        <p className={this.subText}>Yeaahh... that's me!</p>
                        <p className={this.desc}>{`Product Designer & Web-Developer, passionate about solving problems and designing intuitive digital experiences that leave a positive impact on people and the society.\n\nI’m a speedcuber, an amateur guitarist, a terrible singer (not being modest) but I like to sing. I prefer indie folk music & yes! I love Prateek Kuhad :3\n\nCurrently pursuing my bachelor’s from IIT Roorkee, I’m a self-learnt designer drawing experiences by solving real world problems for the users around me.`}</p>
                        <p className={this.catch}>Engineer by Qualification, Designer by Choice.</p>
                    </div>
                </div>
                <div id="img-container"><img id="about-pic" className={this.photo} src={mypic} alt="my very sexy pic" /></div>
            </div>
        )
    }
}

export default About