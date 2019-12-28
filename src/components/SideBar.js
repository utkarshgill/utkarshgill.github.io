import React from 'react';
import LinkButton from './LinkButton.js';
import behance from '../icons/behance.svg';
import dribbble from '../icons/dribbble.svg';

class SideBar extends React.Component {
    render() {
        return(
            <div className="sidebar-container">
                <p className="sub-head">{this.props.title}</p>
                <p className="sub-content">{this.props.content}</p>
                {this.linkViewHandler()}
            </div>
        )
    }

    linkViewHandler() {
        this.checkDribbble();
        this.checkBehance();
    }

    checkDribbble() {
        if(this.props.dribbble != "") {
            return(
                <LinkButton icon={dribbble} label={"dribbble"} link={this.props.dribbble} />
            )
        }
        return null;
    } 
    checkBehance() {
        if(this.props.behance != "") {
            return(
                <LinkButton icon={behance} label={"Behance"} link={this.props.behance} />
            )
        }
        return null;
    } 
}

export default SideBar;