import React from 'react';
import './SideBar.scss';

import './ProjectCard.scss';

class SideBar extends React.Component {
    render() {
        return(
            <div className="sidebar-container">
                <p className="sub-head">{this.props.title}</p>
                <p className="sub-content">{this.props.content}</p>
            </div>
        )
    }
}

export default SideBar;