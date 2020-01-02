import React from 'react';
import ProjectCard from '../components/ProjectCard.js';
import ProjectView from './ProjectView.js';
import { projects } from '../project_data.js';
import { Redirect } from 'react-router-dom';
import Home from './Home.js';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardOpen: false,
            projectIndex: 0,
        }
        this.cardStateHandler();
    }
    
    iconHandler() {
        if (!this.executed) {
            this.executed = true;
            this.props.his.setState({ rotate: true, projectIndex: this.state.projectIndex })
        }
    }

    indexChangeHandler() {
        this.props.his.setState({ selected: 0 });
    }   

    cardStateHandler() {
        this.setState({ cardOpen: false })
        this.executed = false;
        this.props.his.setState({rotate: false})
    }

    contentViewHandler() {
        const self = this;
        if (this.state.cardOpen) {
            this.iconHandler();
        }
        else    return (
                <div className="card-holder">
                    {projects.map((elem, index) => {
                        return <ProjectCard self={self}
                            index={index}
                            thumbnail={elem.thumbnail}
                            genre={elem.genre}
                            title={elem.title}
                            client={elem.client} />
                    })}
                </div>
            )
        }

    render() {
        return (
            <div className="worky">
                {this.contentViewHandler()}
            </div>
        )
    }
}

export default Work;