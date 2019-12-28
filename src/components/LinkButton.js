import React from 'react';

class LinkButton extends React.Component {
    render(){
        return(
            <button className="link-button" onClick={this.redirect.bind(this)}>
                <img src={this.props.icon} />
                <a>{this.props.label}</a>
            </button>
        )
    }

    redirect() {
        window.open(this.props.link);
    }
}

export default LinkButton;