import React from 'react';
import LinkButton from '../components/LinkButton.js';
import SideBar from '../components/SideBar.js';
import redirect from '../icons/open-in-new.svg';
import ProjectCard from '../components/ProjectCard.js';

class ProjectView extends React.Component {
    render() {
        return(
            <div className="parent-box">
                <img src={this.props.banner} />
                <h3>{this.props.title}</h3>
                <p>{this.props.brief}</p>
                <LinkButton icon={redirect} label="Read Case Study" link={this.props.medium} />
                <div className="sidebar">
                    <SideBar title="Duration" content={this.props.duration} />
                    <SideBar title="My Role" content={this.props.roles} />
                    <SideBar behance={this.props.behance} dribbble={this.props.dribbble} />
                </div>
            </div>
        )
    }
}

export default ProjectView;
