import React from 'react';
import {
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter
} from "react-router-dom";
import { AnimatedRoute } from "react-router-transition";
import './NavBar.scss';
import './App.scss';
import icon from './icons/arrow_upward-24px.svg';
import cross from './icons/close-24px.svg';
import hamburger from './icons/menu-24px.svg'
import { slide as Menu } from 'react-burger-menu';
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
      ham: false
    }
  }

  handleClick(index) {
    this.setState({ selected: index })
  }

  buttonViewHandler() {
    console.log(this.props.rotate)
    if (this.props.rotate) {
      console.log("f")
      this.navButtonGroup = "nav-button-group-hidden";
      this.auxRotate = true;

      return <NavLink className="rotate-button" to="/#work" ><img src={icon} /></NavLink>;
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
        return <a className="nav-button-fix" href="#home" ><img src={icon} /></a>;
      }
    }


    else {
      console.log("g")
      return <a className="nav-button-fix" href="#home" ><img src={icon} /></a>;
    }
  }
  
  // closeMenu() {
  //   if(this.exectued) {
  //     this.exectued=true;
  //     this.setState({open: false});
  //   }
  // }

  renderHam() {
    if (!this.props.rotate) {
      let style1 = 0 === this.state.selected ? "menu-item nav-button-active" : "menu-item nav-button";
      let style2 = 1 === this.state.selected ? "menu-item nav-button-active" : "menu-item nav-button";
      let style3 = 2 === this.state.selected ? "menu-item nav-button-active" : "menu-item nav-button";
      return (
        <Menu right isOpen={false} customCrossIcon={<img src={cross} />} customBurgerIcon={<img src={hamburger} />}>
          <a id="work" className={style1} href="/#work">work</a>
          <a id="about" className={style2} href="/#about">about</a>
          <a id="contact" className={style3} href="/#contact">contact</a>
        </Menu>
      )
    }
  }

  renderTitle() {
    if (!this.props.rotate) {
      if (this.state.selected == 0) return <p className="nav-title">work</p>
      else if (this.state.selected == 1) return <p className="nav-title">about</p>
      else if (this.state.selected == 2) return <p className="nav-title">contact</p>
    }
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        {this.renderTitle()}
        {this.renderHam()}
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
    if(origin.index>-1) {
      console.log("yuhhh")
      this.tabs.current.setState({ open: false })
    }
  }

  render() {
    const his = this;
    console.log("This is the process.env", process.env.PUBLIC_URL)
    function myProjectView() {
      return <ProjectView his={his} active={his.state.projectIndex} />
    }
    function fullPage() {
      return <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={800} /* Options here */
        scrollOverflow={true}
        scrollOverflowReset={true}
        animateAnchor={false}
        controlArrows={false}
        resetSliders={true}
        recordHistory={false}
        onLeave={his.onLeave.bind(his)}
        afterLoad={his.afterLoad.bind(his)}


        render={({ state, fullpageApi }) =>

          <ReactFullpage.Wrapper>

            <div onClick={() => fullpageApi.moveSectionDown()} data-anchor="home" className="section"><Home /></div>
            <div className="section" data-anchor="work"><Work his={his} /></div>
            <div className="section" data-anchor="about"><About /></div>
            <div className="section" data-anchor="contact"><Contact /></div>

          </ReactFullpage.Wrapper>

        } />
    }
    return (
      <div onContextMenu={(e)=> e.preventDefault()} style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <Tabs ref={this.tabs} rotate={this.state.rotate} his={his} selected={3}>
          <Panel title="work" />
          <Panel title="about" />
          <Panel title="contact" />
        </Tabs>
        <Switch>
          <Route
            exact path={"/"}
            render={fullPage}
          />
          <Route
            path={"/projects"}
            render={myProjectView}
          />
        </Switch>
      </div>

    );
  }
}



export default AppView;