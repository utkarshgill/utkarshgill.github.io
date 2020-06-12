import React from 'react'
import { projects } from '../project_data'
import sun from '../icons/sun.svg'
import moon from '../icons/moon.svg'




class Darktheme extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            darkMode: localStorage.getItem("theme")
        }
    }
    componentDidMount() {
        const presentTheme = localStorage.getItem("theme");
        if (presentTheme) {
            document.documentElement.setAttribute("data-theme", presentTheme);
            if (presentTheme === "dark") {
                document.querySelector('.switch input[type="checkbox"]').checked = true;
            }
        }
    }

    switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            this.setState({darkMode: "dark"})
        } else {
            document.documentElement.setAttribute("data-theme", "normal");
            localStorage.setItem("theme", "normal");
            this.setState({darkMode: "normal"})
        }
    }

    renderSwitch(darkMode){
        if (darkMode === "dark") {
            return <img style={{ position: "absolute", zIndex: -5}} className="nav-icon" src={moon} id="moon" alt="moon" />
        }

        else if(darkMode === "normal"){
            return <img style={{ position: "absolute", zIndex: -5}} className="nav-icon" src={sun} id="sun" alt="sun" />
        }

    }

    render() {
        return (
                <div className="switch">
                    <input type="checkbox" className="ac-check browser-window__link-check" onChange={e => this.switchTheme(e)} />
                    {this.renderSwitch(this.state.darkMode)}
                </div>
        );
    }
}






function NavBar(props) {

    let workIcon, workText, aboutIcon, aboutText, contactIcon, contactText


    const renderBack = () => {
        let id 
        if (props.page === -1) id = "back-initial"
        else if (props.page === 0) id = "back-invisible"
        else { id = "back-visible" }
        return <a href="#home" id={id} ><svg className="nav-icon browser-window__link-back" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="back-path" d="M10.8333 6.5235V16.6668H9.16664V6.5235L4.69664 10.9935L3.51831 9.81516L9.99998 3.3335L16.4816 9.81516L15.3033 10.9935L10.8333 6.5235Z" fill="black" />
        </svg>
        </a>
    }

    const colorHandler = () => {
        props.page > 0 && props.page <= projects.length ? (workIcon = "work-icon") && (workText = "work-text") : (workIcon = "work-i") && (workText = "work-t")
        props.page === (projects.length + 1) ? (aboutIcon = "about-icon") && (aboutText = "about-text") : (aboutIcon = "about-i") && (aboutText = "about-t")
        props.page === (projects.length + 2) ? (contactIcon = "contact-icon") && (contactText = "contact-text") : (contactIcon = "contact-i") && (contactText = "contact-t")
        if(props.page > 0 && props.page <= projects.length)  return <div id="text-nav">Work</div>
        else if(props.page === (projects.length + 1))  return <div id="text-nav">About</div>
        else if(props.page === (projects.length + 2))  return <div id="text-nav">Contact</div>
    }


   
    

    return (
        <div className="nav">
            {renderBack()}
            <svg id="ham" className="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="ham-path" d="M13.3333 15V16.6667H4.16667V15H13.3333ZM17.5 9.16668V10.8333H2.5V9.16668H17.5ZM15.8333 3.33334V5.00001H6.66667V3.33334H15.8333Z" fill="black" />
            </svg>
            {colorHandler()}
            <div className="menu">
                <a className="menu-button ac-button browser-window__link" href={"#" + projects[0].url}><svg className="menu-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id={workIcon} className="icon-path" d="M5.83317 4.16683V1.66683C5.83317 1.44582 5.92097 1.23385 6.07725 1.07757C6.23353 0.921293 6.44549 0.833496 6.6665 0.833496H13.3332C13.5542 0.833496 13.7661 0.921293 13.9224 1.07757C14.0787 1.23385 14.1665 1.44582 14.1665 1.66683V4.16683H17.4998C17.7209 4.16683 17.9328 4.25463 18.0891 4.41091C18.2454 4.56719 18.3332 4.77915 18.3332 5.00016V16.6668C18.3332 16.8878 18.2454 17.0998 18.0891 17.2561C17.9328 17.4124 17.7209 17.5002 17.4998 17.5002H2.49984C2.27882 17.5002 2.06686 17.4124 1.91058 17.2561C1.7543 17.0998 1.6665 16.8878 1.6665 16.6668V5.00016C1.6665 4.77915 1.7543 4.56719 1.91058 4.41091C2.06686 4.25463 2.27882 4.16683 2.49984 4.16683H5.83317ZM3.33317 13.3335V15.8335H16.6665V13.3335H3.33317ZM3.33317 11.6668H16.6665V5.8335H3.33317V11.6668ZM7.49984 2.50016V4.16683H12.4998V2.50016H7.49984ZM9.1665 9.16683H10.8332V10.8335H9.1665V9.16683Z" fill="#FF517B" />
                </svg><p id={workText} className="menu-text">Work</p></a>
                <a className="menu-button ac-button browser-window__link" href="#about"><svg className="menu-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id={aboutIcon} className="icon-path" d="M16.6668 18.3335H15.0002V16.6668C15.0002 16.0038 14.7368 15.3679 14.2679 14.8991C13.7991 14.4302 13.1632 14.1668 12.5002 14.1668H7.50016C6.83712 14.1668 6.20124 14.4302 5.7324 14.8991C5.26355 15.3679 5.00016 16.0038 5.00016 16.6668V18.3335H3.3335V16.6668C3.3335 15.5618 3.77248 14.502 4.55388 13.7206C5.33529 12.9391 6.39509 12.5002 7.50016 12.5002H12.5002C13.6052 12.5002 14.665 12.9391 15.4464 13.7206C16.2278 14.502 16.6668 15.5618 16.6668 16.6668V18.3335ZM10.0002 10.8335C9.34355 10.8335 8.69337 10.7042 8.08675 10.4529C7.48012 10.2016 6.92892 9.83332 6.46463 9.36903C6.00034 8.90474 5.63204 8.35354 5.38076 7.74691C5.12949 7.14029 5.00016 6.49011 5.00016 5.8335C5.00016 5.17689 5.12949 4.52671 5.38076 3.92008C5.63204 3.31345 6.00034 2.76226 6.46463 2.29796C6.92892 1.83367 7.48012 1.46537 8.08675 1.2141C8.69337 0.962825 9.34355 0.833496 10.0002 0.833496C11.3262 0.833496 12.598 1.36028 13.5357 2.29796C14.4734 3.23564 15.0002 4.50741 15.0002 5.8335C15.0002 7.15958 14.4734 8.43135 13.5357 9.36903C12.598 10.3067 11.3262 10.8335 10.0002 10.8335ZM10.0002 9.16683C10.8842 9.16683 11.7321 8.81564 12.3572 8.19052C12.9823 7.5654 13.3335 6.71755 13.3335 5.8335C13.3335 4.94944 12.9823 4.10159 12.3572 3.47647C11.7321 2.85135 10.8842 2.50016 10.0002 2.50016C9.11611 2.50016 8.26826 2.85135 7.64314 3.47647C7.01802 4.10159 6.66683 4.94944 6.66683 5.8335C6.66683 6.71755 7.01802 7.5654 7.64314 8.19052C8.26826 8.81564 9.11611 9.16683 10.0002 9.16683Z" fill="black" />
                </svg><p id={aboutText} className="menu-text">About</p></a>
                <a className="menu-button ac-button browser-window__link" href="#contact"><svg className="menu-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id={contactIcon} className="icon-path" d="M2.49984 2.5H17.4998C17.7209 2.5 17.9328 2.5878 18.0891 2.74408C18.2454 2.90036 18.3332 3.11232 18.3332 3.33333V16.6667C18.3332 16.8877 18.2454 17.0996 18.0891 17.2559C17.9328 17.4122 17.7209 17.5 17.4998 17.5H2.49984C2.27882 17.5 2.06686 17.4122 1.91058 17.2559C1.7543 17.0996 1.6665 16.8877 1.6665 16.6667V3.33333C1.6665 3.11232 1.7543 2.90036 1.91058 2.74408C2.06686 2.5878 2.27882 2.5 2.49984 2.5ZM16.6665 6.03167L10.0598 11.9483L3.33317 6.01333V15.8333H16.6665V6.03167ZM3.759 4.16667L10.0507 9.71833L16.2515 4.16667H3.759Z" fill="black" />
                </svg><p id={contactText} className="menu-text">Contact</p></a>
            </div>
            <Darktheme />
        </div>
    )

}

export default NavBar