import React from 'react';
import LinkButton from '../components/LinkButton.js';
import SideBar from '../components/SideBar.js';
import redirect from '../icons/open-in-new.svg';
import { projects } from '../project_data.js'
import behance from '../icons/behance.svg';
import dribbble from '../icons/dribbble.svg';
import './ProjectView.scss';

class ProjectView extends React.Component {
    checkDribbble() {
        if(projects[this.props.active].dribbble) {
            return(
                <LinkButton icon={dribbble} label={"View on dribbble"} link={projects[this.props.active].dribbble} />
            )
        }
        return null;
    } 
    checkBehance() {
        if(projects[this.props.active].behance) {
            return(
                <LinkButton icon={behance} label={"View on Behance"} link={projects[this.props.active].behance} />
            )
        }
        return null;
    } 
    render() {
        return (
            <div className="project-container">
                <img className="banner" src={projects[this.props.active].banner} />
                <p className="sub-context">{projects[this.props.active].genre + " "}<span id="bullet">•</span>{" " + projects[this.props.active].client}</p>
                <h3 className="project-title">{projects[this.props.active].title}</h3>
                <div className="project-content">
                    <p className="brief-head">Project Brief</p>
                    <p id="project-brief">{projects[this.props.active].brief}</p>
                    <LinkButton icon={redirect} label="Read Case Study" link={projects[this.props.active].medium} />
                    {this.checkDribbble()}
                    {this.checkBehance()}
                </div>
                <div className="sidebar">
                    <SideBar title="Duration" content={projects[this.props.active].duration} />
                    <SideBar title="My Role" content={projects[this.props.active].roles} />
                    <SideBar behance={projects[this.props.active].behance} dribbble={projects[this.props.active].dribbble} />
                </div>
            </div>
        )
    }
}

export default ProjectView;