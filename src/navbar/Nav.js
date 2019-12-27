import React from 'react';
import './NavBar.scss';
import icon from '../icons/arrow_upward-24px.svg';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected || 0
        }
    }
    
    render() {
        return (
            <div className="nav-base">
                 <div className="parent">
                    <button className="nav-button" onClick={this.resetSelection.bind(this)}>
                        <img src={icon} alt="back" />
                    </button>
                    <ul className="nav-button-group">
                        {this.props.children.map((elem, index) => {
                            let style = index === this.state.selected ? 'nav-button-active' : 'nav-button';
                            return <li id={elem.props.title} className={style} key={index} onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>
                        })}
                    </ul>
                    {/*<div className="tab">{this.props.children[this.state.selected]}</div>*/}
                </div>
            </div>    
        )
    }

    handleChange(index) {
        this.setState({ selected: index })
    }
    
    resetSelection() {
        this.setState({ selected: 3 });
    }
   
}



class Panel extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Nav extends React.Component {
    render() {
        return (
            <Tabs selected={3}>
                <Panel title="work" />
                <Panel title="about" />
                <Panel title="contact" />
            </Tabs>
        )
    }
}

export default Nav;