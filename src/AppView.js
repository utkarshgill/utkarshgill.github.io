import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import './NavBar.scss';
import './App.scss';
import icon from './icons/arrow_upward-24px.svg';
import Home from './pages/Home.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import ReactFullpage from '@fullpage/react-fullpage';
import ProjectView from './pages/ProjectView';




class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: -1,
      selected: this.props.selected || 0,
    }

  }

  handleClick(index) {
    this.setState({ selected: index })
  }



  /* hideButton() {
     console.log(this.props.rotate)
     let buttonStyle = "hidden";
     
     if(this.props.rotate) {
       buttonStyle = "rotate-button";
       return <NavLink className={buttonStyle} to="/#work" ><img src={icon} /></NavLink>;
       
     }
     else {  
       if(this.state.selected != 3 && this.props.rotate) {
         buttonStyle = "back-nav-button";
         return <a className={buttonStyle} href="#home" ><img src={icon} /></a>;
       }
       else if(this.state.selected != 3) {
         buttonStyle = "nav-button";
         return <a className={buttonStyle} href="#home" ><img src={icon} /></a>;
       }
       else return <a className="hidden-start" href="#home" ><img src={icon} /></a>;
     } */

  buttonViewHandler() {
    console.log(this.props.rotate)
    if (this.props.rotate) {
      console.log("f")
      this.navButtonGroup = "nav-button-group-hidden";

      this.auxRotate = true;

      return <Link className="rotate-button" to="/#work" ><img src={icon} /></Link>;
    }
    else if (this.state.selected == 3) {
      if (this.state.previous >= 0) {
        console.log("a")
        return <a className="hidden" href="#home" ><img src={icon} /></a>;
      }
      else {
        console.log("b")
        this.navButtonGroup = "nav-button-group";

        return <a className="hidden-start" href="#home" ><img src={icon} /></a>;
      }

    }
    else if (this.state.selected >= 0) {
      if (this.auxRotate) {
        console.log("d")
        this.auxRotate = false;
        this.navButtonGroup = "nav-button-group";
        return <a className="back-nav-button" href="#home" ><img src={icon} /></a>;
      }

      else if (this.state.previous == 3) {
        console.log("c")
        return <a className="not-hidden" href="#home" ><img src={icon} /></a>;
      }

      else {
        console.log("e")
        return <a className="nav-button" href="#home" ><img src={icon} /></a>;
      }
    }


    else {
      console.log("g")
      return <a className="nav-button" href="#home" ><img src={icon} /></a>;
    }
  }

  render() {
    return (
      <div>
        <div className="nav-base">
          <div className="parent">
            {this.buttonViewHandler()}
            <ul className={this.navButtonGroup}>
              {this.props.children.map((elem, index) => {
                //this.navButtonClass = this.auxRotate ? "hidden" : "not-hidden";
                //this.navButtonActiveClass = this.auxRotate ? "hidden-active" : "not-hidden-active";
                let style = index === this.state.selected ? "nav-button-active" : "nav-button";
                return <li id={elem.props.title} className={style} key={index} onClick={this.handleClick.bind(this, index)}>
                  <a href={"#" + elem.props.title}>{elem.props.title}</a>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class Panel extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}



class AppView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: false,
      projectIndex: 0,
    }
    this.tabs = React.createRef();
  }



  onLeave(origin, destination, direction) {
    if (destination.index > 0) {
      this.tabs.current.setState({ selected: destination.index - 1 })
    }
    else this.tabs.current.setState({ selected: 3 })

    if (origin.index > 0) {
      this.tabs.current.setState({ previous: origin.index - 1 })
    }
    else this.tabs.current.setState({ previous: 3 })

  }

  afterLoad(origin, destination, direction) {
  }

  render() {
    const his = this;
    return (
      <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <Tabs ref={this.tabs} rotate={this.state.rotate} his={his} selected={3}>
          <Panel title="work" />
          <Panel title="about" />
          <Panel title="contact" />
        </Tabs>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          runOnMount={false}
          className="switch-wrapper"
        >
          <Route exact path="/">
            <ReactFullpage
              //fullpage options
              licenseKey={'YOUR_KEY_HERE'}
              scrollingSpeed={800} /* Options here */
              scrollOverflow={true}
              animateAnchor={true}
              scrollOverflowReset={true}
              controlArrows={false}
              resetSliders={true}
              recordHistory={false}
              onLeave={this.onLeave.bind(this)}
              afterLoad={this.afterLoad.bind(this)}


              render={({ state, fullpageApi }) =>

                <ReactFullpage.Wrapper>

                  <div onClick={() => fullpageApi.moveSectionDown()} data-anchor="home" className="section"><Home /></div>
                  <div className="section" data-anchor="work"><Work his={his} /></div>
                  <div className="section" data-anchor="about"><About /></div>
                  <div className="section" data-anchor="contact"><Contact /></div>

                </ReactFullpage.Wrapper>

              } />
          </Route>
          <Route path="/projects"><ProjectView his={his} active={this.state.projectIndex} /></Route>
        </AnimatedSwitch>
      </div>

    );
  }
}



export default AppView;