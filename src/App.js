import React from 'react'
import './App.scss'

import UseAnimations from 'react-useanimations';
import download from 'react-useanimations/lib/download'
import linkedin from 'react-useanimations/lib/linkedin'
import twitter from 'react-useanimations/lib/twitter'

import arrowDown from 'react-useanimations/lib/arrowDown'
import arrowRight from 'react-useanimations/lib/arrowRightCircle'
import mail from 'react-useanimations/lib/mail'

import cover from "./assets/cover.jpg"
import unicorn from "./assets/unicorn.jpg"
import black from "./assets/black-bg.jpg"
import resume from "./assets/Resume-UtkarshGill.pdf"

import { Frame, Page, Stack } from "framer"
import { projects } from './project_data'




function App() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  var responsive,
    align,
    dist,
    contentWidth,
    contentHeight,
    marginSide,
    marginTop,
    marginBottom,
    conDist,
    workDist,
    projectMargin,
    projectGap,
    projectWidth,
    scrollable,
    iconWidth,
    imgHeight,
    imgWidth,
    conGap

  function myFunction(x) {
    if (x.matches) { // If media query matches
      responsive = "vertical"
      align = "start"
      dist = "space-between"
      contentHeight = "auto"
      contentWidth = "100%"
      marginSide = 20
      marginTop = 48
      marginBottom = 60
      conDist = "start"
      workDist = "center"
      projectMargin = 20
      projectGap = 0
      projectWidth = "80vw"
      scrollable = "false"
      iconWidth = "100%"
      imgWidth = "150px"
      imgHeight = "200px"
      conGap = 24

    } else {
      responsive = "horizontal"
      align = "center"
      dist = "space-evenly"
      contentHeight = "400px"
      contentWidth = "600px"
      marginSide = 0
      marginTop = 0
      marginBottom = 0
      conDist = "space-between"
      workDist = "center"
      projectMargin = window.innerWidth / 8
      projectGap = window.innerWidth / 20
      projectWidth = "360px"
      scrollable = "true"
      iconWidth = "248px"
      imgHeight = "640px"
      imgWidth = "480px"
      conGap = 60
    }
  }

  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction);

  return (
    <Page
      gap={0}
      width="100vw"
      height={window.innerHeight}
      wheelEnabled={scrollable}
      direction="vertical"
      defaultEffect="cube"
      directionLock={true}
      contentHeight="auto"
    >
      <Stack
        gap={32}
        width="100%"
        height={window.innerHeight}
        direction={responsive}
        alignment="center"
        distribution={dist}
        backgroundColor="white"

        style={{ boxSizing: "border-box" }}
        paddingLeft={marginSide}
        paddingRight={marginSide}
        paddingTop={marginTop}
        paddingBottom={marginBottom}
      >
        <div className="scroll-text-box">
          <UseAnimations strokeColor="white" size="32" animation={arrowDown} />
          <p className="scroll-text">Scroll to view my work</p>
        </div>
        <Stack
          gap={conGap}
          direction="vertical"
          distribution="center"
          height="auto"
          width={contentWidth}
          alignment="start"
          style={{ boxSizing: "border-box" }}
        >
          <p className="head"><span>Hello, I’m Gill. </span><br />I design the obvious.</p>
          <p className="info">Product design enthusiast and a dank unicorn. Upcoming design intern at <a
            rel="noopener,noreferrer"
            target="_blank"
            href="https://www.nutanix.com"
          >Nutanix</a>, previously at <a
            rel="noopener,noreferrer"
            target="_blank"
            href="https://www.postman.com"
          >Postman</a>.</p>
          <Stack
            gap={20}
            direction="vertical"
            height="auto"
            width={iconWidth}
          >
            <Frame width="100%" height="2px" backgroundColor="black" />
            <Stack
              direction="horizontal"
              distribution="space-between"
              width="100%"
              height="auto"
            >
              <a style={{}} href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=utkarshgill07@gmail.com" target="_blank" rel="noopener,noreferrer" >
                <UseAnimations strokeColor="black" size="32" animation={mail} />
              </a>
              <a style={{}} href="https://twitter.com/UtkarshGill5" target="_blank" rel="noopener,noreferrer" >
                <UseAnimations strokeColor="black" size="32" animation={twitter} />
              </a>
              <a style={{}} href="https://www.linkedin.com/in/utkarsh-gill-9a5029173/" target="_blank" rel="noopener,noreferrer" >
                <UseAnimations strokeColor="black" size="32" animation={linkedin} />
              </a>
              <a style={{}} download href={resume} target="_blank" rel="noopener,noreferrer" >
                <UseAnimations strokeColor="black" size="32" animation={download} />
              </a>
            </Stack>
          </Stack>

        </Stack>
        <Frame width={imgWidth} height={imgHeight} image={unicorn} />
      </Stack>
      <Stack
        id="work"
        gap={16}
        width="100%"
        height={window.innerHeight}
        backgroundColor="black"
        distribution={workDist}
        alignment="start"
        style={{ boxSizing: "border-box" }}
      >

        <p className="head2">Work</p>
        <Page
          width="100%"
          height="75%"
          contentWidth="auto"
          contentHeight="auto"
          wheelEnabled={scrollable}
          defaultEffect="wheel"
          direction="horizontal"
          alignment="center"
          paddingLeft={projectMargin}
          paddingRight={projectMargin}
          gap={projectGap}
        >
          {projects.map((elem, index) => {
            return <Frame
              width={projectWidth}
              height="100%"
              backgroundColor={elem.color}
              borderRadius={1}
            >
              <Stack
                distribution="space-between"
                alignment="start"
                padding="24"
                paddingTop="48"
                paddingBottom="48"
                width="100%"
                height="100%"
                style={{ boxSizing: "border-box" }}
              >


                <Stack
                  gap={16}
                  alignment="start"
                  width="100%"
                  height="auto"

                >
                  <p className="sub-head">{elem.subtext}</p>
                  <p className="head3">{elem.title}</p>
                </Stack>
                <a style={{width: "100%",  height: "32px"}} href={elem.link} rel="noopener,noreferrer" target="_blank">
                <Stack
                    direction="horizontal"
                    width="100%"
                    height="auto"
                    alignment="center"
                  >
                    <UseAnimations strokeColor="white" size="32" animation={arrowRight} />
                    <p className="scroll-text">Read case study</p>
                  </Stack>
                </a>

              </Stack>


            </Frame>
          })}
        </Page>
      </Stack>
    </Page>
  )
}

export default App