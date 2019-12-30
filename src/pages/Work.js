import React from 'react';
import ProjectCard from '../components/ProjectCard.js';
import ProjectView from './ProjectView.js';
import { projects } from '../project_data.js';
import { Redirect } from 'react-router-dom';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardOpen: false,
            projectIndex: 0,
        }
        this.indexChangeHandler();
        this.cardStateHandler();
        let executed = false;
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
    }

    contentViewHandler() {
        const self = this;
        if (this.state.cardOpen) {
            this.iconHandler();
            return (
                <ProjectView active={this.state.projectIndex}/>
            )
        }
        else {
            return (
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
    }

    render() {
        return (
            <div className="parent-box">
                {this.contentViewHandler()}
            </div>
        )
    }
}

export default Work;