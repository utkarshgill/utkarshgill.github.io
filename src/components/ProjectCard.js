import React from 'react';
import './ProjectCard.scss';

class ProjectCard extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="overlay" />
                <img className="thumbnail" src={this.props.thumbnail}/>
                <text id="genre">{this.props.genre}</text>
                <h6>{this.props.title}</h6>
                <text id="client">{this.props.client}</text>




                
                    {/* <img src={this.props.banner} />
                    <h3>{this.props.title}</h3>
                    <p>{this.props.brief}</p>
                    <LinkButton icon={redirect} label="Read Case Study" link={this.props.medium} />
                    <div className="sidebar">
                        <SideBar title="Duration" content={this.props.duration} />
                        <SideBar title="My Role" content={this.props.roles} />
                        <SideBar behance={this.props.behance} dribbble={this.props.dribbble} />
                    </div> */}





            </div>
        )
    }
}

export default ProjectCard;