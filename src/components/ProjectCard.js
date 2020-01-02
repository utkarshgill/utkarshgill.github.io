import React from 'react';
import './ProjectCard.scss';
import { Redirect , NavLink } from 'react-router-dom';

class ProjectCard extends React.Component {


    handleClick() {
        this.props.self.setState({cardOpen: true, projectIndex: this.props.index})
    }

    render() {
            return(
                <NavLink className="container" to="/projects" onClick={this.handleClick.bind(this)}>
                    <img className="thumbnail" src={this.props.thumbnail}/>
                    <div className="text-container">
                        <text id="genre">{this.props.genre}</text>
                        <h6>{this.props.title}</h6>
                        <text id="client">{this.props.client}</text>
                    </div>
                    <div className="overlay" />
                </NavLink>
            )
    }
}

export default ProjectCard;