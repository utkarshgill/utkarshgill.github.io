import React from 'react'

import './App.scss'

import Home from './pages/Home.js'
import Work from './pages/Work.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import NavBar from './components/NavBar.js'
import { projects } from './project_data.js'

import ReactFullpage from '@fullpage/react-fullpage'
import WorkNav from './components/WorkNav'
import { CursorProvider } from 'react-cursor-custom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: -1,
      color: ""
    }
  }

  onLeave(origin, destination, direction) {
    this.setState({ page: destination.index })
  }
  handleColor(darkMode) {
    if(!darkMode) this.setState({color: "#444444"});
    else this.setState({color: "#cccccc"})
  }

  render() {
    return (
      <CursorProvider color={this.state.color} noRing={false} ringSize={36} transitionTime={200}>
           <div style={{ display: 'flex', position: 'relative', justifyContent: 'flex-end' }}>
          <NavBar cursorColor={(e) => this.handleColor(e)} page={this.state.page} />
          <WorkNav page={this.state.page} />
          <ReactFullpage
            //fullpage options
            touchSensitivity={18}
            scrollingSpeed={600} /* Options here */
            scrollOverflow={true}
            scrollOverflowReset={false}
            scrollOverflowOptions={{ scrollbars: false }}
            animateAnchor={false}
            controlArrows={false}
            resetSliders={true}
            recordHistory={false}
            keyboardScrolling={true}
            fixedElements="#nav-bar"
            onLeave={this.onLeave.bind(this)}

            render={({ state, fullpageApi }) =>

              <ReactFullpage.Wrapper>

                <div className="section" data-anchor="home"><Home moveDown={() => fullpageApi.moveSectionDown()} /></div>
                {projects.map((elem, index) => {
                  return <div className="section" data-anchor={elem.url} ><Work
                    index={index}
                    page={this.state.page}
                    banner={elem.banner}
                    brief={elem.brief}
                    genre={elem.genre}
                    title={elem.title}
                    client={elem.client}
                    roles={elem.roles}
                    duration={elem.duration}
                    behance={elem.behance}
                    dribbble={elem.dribbble}
                    medium={elem.medium} /></div>
                })}
                <div className="section" data-anchor="about"><About page={this.state.page}/></div>
                <div className="section" data-anchor="contact"><Contact page={this.state.page}/></div>

              </ReactFullpage.Wrapper>

            }
          />
        </div>
      </CursorProvider>
     
    )
  }
}

export default App