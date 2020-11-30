import React, { useState } from 'react'
import mypic from './assets/guy.jpg'
import './App.scss'

import UseAnimations from 'react-useanimations';
import download from 'react-useanimations/lib/download'
import linkedin from 'react-useanimations/lib/linkedin'
import mail from 'react-useanimations/lib/mail'

import { Frame, Page, Scroll, Stack } from "framer"
import { projects } from './project_data'
import resume from './assets/guy.jpg'

function App() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const main = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 2.4 ,
        duration: 0.6
      }
    }
  }

  return (
    <Stack
    initial="hidden"
    animate="show" gap={0} center="x" width="100%" style={{maxWidth: "1200px"}}>
      <Stack
        center="x"
        backgroundColor="rgba(27, 27, 27, 0.95)"
        top={0}
        gap={0}
        style={{ zIndex: "10", boxSizing: "border-box" }}
        width="100%" height="auto"
        direction="horizontal"
        distribution="space-between"
        alignment="end"
        paddingTop={40}
        paddingLeft={24}
        paddingRight={24}
        variants={item}
      >
        <span className="text">gill.design</span>
        <Stack direction="horizontal" width="auto" height="auto" gap={32}>
          <a href="mailto: utkarshgill07@gmail.com"><UseAnimations size={28} strokeColor="#fff" animation={mail} /></a>
          <a href="https://www.linkedin.com/in/utkarsh-gill-9a5029173/"><UseAnimations size={28} strokeColor="#fff" animation={linkedin} /></a>
          <a href={resume} download><UseAnimations size={28} strokeColor="#fff" animation={download} /></a>
        </Stack>
      </Stack>


      <Stack
        center="x"
        gap={0}
        width="100%"
        height="auto"
        style={{
          boxSizing: "border-box",
        }}
        paddingRight={24}
        paddingLeft={24}
      >

        <Stack variants={main} gap={16} distribution="center" alignment="center" height="64vh" width="100%" >
          <p className="title">Hi, I'm Gill.
          <span > I design the obvious.</span>
          </p>
          <Stack variants={item} gap={0} width="auto" height="auto"><p variants={item} className="sub-text">Upcoming Product Design Intern at Nutanix. Summer 2020 Intern at Postman.</p>
        </Stack>
        </Stack>


        <Stack variants={item} gap={16} alignment="start" width="100%" height="auto">
          <span className="text">My work</span>
          <span className="sub-text">A directory of my projects and work experiences</span>
        </Stack>
        <Stack variants={item} gap={16} width="100%" height="auto" paddingTop={48} paddingBottom={60}>
          {projects.map((elem, index) => {
            return <Frame image={elem.banner} whileHover={{ width: "101%" }} style={{ pointerEvents: "all" }} onClick={() => { openInNewTab(elem.link) }} backgroundColor="#6173FF" position="relative" width="100%" height="360px" radius="14px">
              <Stack gap={8} style={{ maxWidth: "100%", boxSizing: "border-box" }} alignment="start" width="100%" height="auto" bottom={0} paddingBottom={28} paddingTop={28} paddingLeft={24} paddingRight={24}>
                <span className="sub-text">{elem.subtext}</span>
                <span className="text project">{elem.title}</span>
              </Stack>
            </Frame>
          })}
        </Stack>
        <Stack width="100%"><span className="sub-text">I designed and developed this website from scratch © 2020</span></Stack>
      </Stack>
    </Stack>

  )
}

export default App