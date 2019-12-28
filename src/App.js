import React from 'react';
import './NavBar.scss';
import './App.scss';
import icon from './icons/arrow_upward-24px.svg';
import Home from './pages/Home.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected || 0
        };
    }
    render() {
        return (
            <div>
                <div className="nav-base">
                    <div className="parent">
                        {this.handleButtonView()}
                        <ul className="nav-button-group">
                            {this.props.children.map((elem, index) => {
                                let style = index === this.state.selected ? 'nav-button-active' : 'nav-button';
                                return <li id={elem.props.title} className={style} key={index} onClick={this.handleChange.bind(this, index)}>{elem.props.title}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="base">
                    <Home status={this.state.selected} />
                    <Work status={this.state.selected} />
                    <About status={this.state.selected} />
                    <Contact status={this.state.selected} />
                </div>
            </div>
        )
    }

    handleChange(index) {
        this.setState({ selected: index })
    }
    resetSelection() {
        this.setState({ selected: 3 })
    }
    handleButtonView() {
        let backStyle = this.state.selected === 3 ? 'hidden' : 'nav-button';
        return (
            <button className={backStyle} onClick={this.resetSelection.bind(this)}>
                <img src={icon} alt="back" />
            </button>
        )
    }
}

class Panel extends React.Component {
    render() {
        return <div>{this.props.children}</div>
    }
}

class App extends React.Component {
    render() {
        return (
            <Tabs selected={2}>
                <Panel title="work"/>
                <Panel title="about"/>
                <Panel title="contact"/>
            </Tabs>
        )
    }
}

export default App;