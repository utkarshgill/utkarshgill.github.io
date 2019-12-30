import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import './NavBar.scss';
import './App.scss';
import icon from './icons/arrow_upward-24px.svg';
import Home from './pages/Home.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { projects } from './project_data';
class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || 0,
      rotate: false,
      projectIndex: 0,
      
    };
    
    this.WorkPage = React.createRef();
   }

  render() {
    const his=this;
    return (
      <Router>
        <div>
          <div className="nav-base">
            <div className="parent">
              {this.handleButtonView()}
              <ul className="nav-button-group">
                {this.props.children.map((elem, index) => {
                  let style = index === this.state.selected ? 'nav-button-active' : 'nav-button';
                  return <li id={elem.props.title}
                    className={style}
                    key={index}
                    onClick={this.handleChange.bind(this, index)}>
                    <Link to={"/" + elem.props.title}>
                      {elem.props.title}
                    </Link>
                  </li>
                })}
              </ul>
            </div>
          </div>
            <div className="base">
              <Switch location={window.location}>
                <Route exact path="/">
                  <Home/>
                </Route>
                {this.projectPathHandler(this.state.projectIndex)}
                <Route path="/about">
                  <About his={his}/>
                </Route>
                <Route path="/contact">
                  <Contact his={his}/>
                </Route>
              </Switch>
            </div>
        </div>
      </Router>

    )
  }

 
  
  projectPathHandler(projectIndex) {

    const his=this;
    let path = "/work/"+projectIndex;
    if(0) {
      return(
        <Route path={path}>
          <Work his={his} ref={this.WorkPage}/>
        </Route>
      )
    }
    else{
      return(
        <Route path={"/work"}>
          <Work his={his} ref={this.WorkPage}/>          
        </Route>
      )
    }
  }

  handleChange(index) {
    this.setState({ selected: index });
  }
  resetSelection() {
    this.setState({ selected: 3 });
  }
  resetRotate() {
    this.setState({rotate: false});
    this.WorkPage.current.cardStateHandler();
  }
  handleButtonView() {
    let back = "/"
    let backStyle = "hidden";
    let handleClick = this.resetSelection.bind(this)
    if(this.state.selected === 3) {
      backStyle="hidden"
    }
    else if(this.state.rotate) {
      back = "/work"
      backStyle="rotate-button"
      handleClick=this.resetRotate.bind(this)
    }
    else {
      backStyle="nav-button"
    }
    return (
        <NavLink to={back} className={backStyle} onClick={handleClick}>
          <img src={icon} alt="back" />
        </NavLink>
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
      <Tabs selected={3}>
        <Panel title="work" />
        <Panel title="about" />
        <Panel title="contact" />
      </Tabs>
    )
  }
}

export default App;