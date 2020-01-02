import React from 'react';
import LinkButton from '../components/LinkButton.js';
import SideBar from '../components/SideBar.js';
import redirect from '../icons/open-in-new.svg';
import { projects } from '../project_data.js'
import behance from '../icons/behance.svg';
import dribbble from '../icons/dribbble.svg';
import './ProjectView.scss';

class ProjectView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectIndex: this.props.active
        }
    }
    checkDribbble() {
        if(projects[this.state.projectIndex].dribbble) {
            return(
                <LinkButton icon={dribbble} label={"View on dribbble"} link={projects[this.state.projectIndex].dribbble} />
            )
        }
        return null;
    } 
    checkBehance() {
        if(projects[this.state.projectIndex].behance) {
            return(
                <LinkButton icon={behance} label={"View on Behance"} link={projects[this.state.projectIndex].behance} />
            )
        }
        return null;
    } 
    render() {
        return (
            <div className="worky">
                <div className="project-container">
                    <img className="banner" src={projects[this.state.projectIndex].banner} />
                    <img className="banner-mobile" src={projects[this.state.projectIndex].thumbnail} />
                    <h3 className="project-title">{projects[this.state.projectIndex].title}</h3>
                    <p className="sub-context">{projects[this.state.projectIndex].genre + " "}<span id="bullet">•</span>{" " + projects[this.state.projectIndex].client}</p>
                    <div className="project-content">
                        <p className="brief-head">Project Brief</p>
                        <p id="project-brief">{projects[this.state.projectIndex].brief}</p>
                        <LinkButton icon={redirect} label="Read Case Study" link={projects[this.state.projectIndex].medium} />
                        {this.checkDribbble()}
                        {this.checkBehance()}
                    </div>
                    <div className="sidebar">
                        <SideBar title="Duration" content={projects[this.state.projectIndex].duration} />
                        <SideBar title="My Role" content={projects[this.state.projectIndex].roles} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectView;