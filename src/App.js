import React from 'react'

import './App.scss'

import Home from './pages/Home.js'
import Work from './pages/Work.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import NavBar from './components/NavBar.js'
import { projects } from './project_data.js'

import WorkNav from './components/WorkNav'

import * as Pageable from 'pageable'
import Demo3 from './cursor'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: -1
    }
  }

componentDidMount() {
  this.setState({})
  const demo3 = new Demo3();
}

handleScroller() {
let id
  if (this.state.page === -1) id = "hover-listener-initial"
  else if (this.state.page === 0) id = "hover-listener"
  else { id = "hover-hidden"}
  
  return<div className={id} >
  <svg id="down-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="down-path" d="M10.0001 10.9766L14.1251 6.85156L15.3034 8.0299L10.0001 13.3332L4.69678 8.0299L5.87511 6.85156L10.0001 10.9766Z" fill="black"/>
  </svg>
  <a id="comment" className="browser-window__link-comment" href={"#"+projects[0].url} >Scroll to view my work</a>
</div>

}


  render() {
    

    const pages = new Pageable("#wrapper", {
      childSelector: "[data-anchor]", // CSS3 selector string for the pages
      anchors: [], // define the page anchors
      pips: false, // display the pips
      animation: 400, // the duration in ms of the scroll animation
      delay: 0, // the delay in ms before the scroll animation starts
      throttle: 50, // the interval in ms that the resize callback is fired
      orientation: "vertical", // or horizontal
      swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
      freeScroll: true, // allow manual scrolling when dragging instead of automatically moving to next page
      navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
      navNextEl: "#comment", // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
      infinite: false, // enable infinite scrolling (from 0.4.0)
      slideshow: false,
      events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: true, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: true, // enable / disable keyboard navigation
      },
      easing: function (currentTime, startPos, endPos, interval) {
        // the easing function used for the scroll animation
        return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
      },
      onInit: function () {
        // do something when the instance is ready
      },
      onUpdate: function () {
        // do something when the instance updates
      },
      onBeforeStart: function () {
        // do something before scrolling begins
      },
      onStart: function () {
        // do something when scrolling begins
      },
      onScroll: function () {
        // do something during scroll
      },
      onFinish: function () {
        // do something when scrolling ends
      },
    });


    pages.on("scroll.start", data => {
      this.setState({ page: pages.index })
      localStorage.setItem('page', pages.index)
    });

   
    

    const bar = document.querySelector(".linear-progress .bar");

    function update(data) {
      const pos = 1 - ((data.max - data.scrolled) / data.max);
      bar.style.transform = `scale(${pos}, .5)`;
    }

    pages.on("scroll", update)


  






    return (
      <div>

        <div className="circle-cursor circle-cursor--inner"></div>
				<div className="circle-cursor circle-cursor--outer"></div>

        {this.handleScroller()}



        <NavBar pages={pages} page={this.state.page} />
        <WorkNav page={this.state.page} />
        <div className="linear-progress">
          <div className="bar"></div>
        </div>
        <div id="wrapper">
          <div className="section" data-anchor="home"><Home /></div>
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
          <div className="section" data-anchor="about"><About page={this.state.page} /></div>
          <div className="section" data-anchor="contact"><Contact page={this.state.page} /></div>
        </div>


      </div>

    )
  }


 
}

export default App