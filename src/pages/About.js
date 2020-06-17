import React from 'react'
import mypic from '../images/about.jpg'

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
                        <p className={this.desc}>{`Speedcuber🤓, amatuer guitarist🎸, a terrible singer🤢. I love indie folk🎵and country🤠 music.🎻 I’m a huuuuuuge fan of Pewdiepie👊🏻, Rick & Morty😵 and Prateek Kuhad🎹. Being attracted to a hilariously dark🌚 and twisted sense of humor😈, I fall into weird social situations🤧.
Currently, a B.Tech student at IIT Roorkee🏛️, I’m a clumsy dank unicorn🦄 trying to sort my life through Dezzayn.✍🏻`}</p>
                        <p className={this.catch}>Engineer by Qualification, Designer by Choice.</p>
                    </div>
                </div>
                <div id="img-container"><img id="about-pic" className={this.photo} src={mypic} alt="my very sexy pic" /></div>
            </div>
        )
    }
}

export default About