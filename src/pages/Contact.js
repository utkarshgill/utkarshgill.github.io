import React from 'react';
import './Contact.scss';
import LinkButton from '../components/LinkButton.js';

import mail from '../icons/gmail.svg';
import call from '../icons/phone.svg';
import facebook from '../icons/facebook.svg';
import instagram from '../icons/instagram.svg';
import linkedin from '../icons/linkedin-box.svg';
import github from '../icons/github-circle.svg';
import dribbble from '../icons/dribbble.svg';
import behance from '../icons/behance.svg';


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    indexChangeHandler() {
        this.props.his.setState({selected: 2})
    }
    render() {
        return (
                <div className="parent-box">
                    <h3 id="contact-greet" >Let's <span>Connect!</span></h3>
                    <div className="photo" />
                    <p id="contact-info">Wanna create someting great? Feel free to contact
                   for freelance/collaborations or just drop a hi! :)</p>
                    <div className="links">
                        <div id="group1" className="link-group">
                            <LinkButton icon={mail} label={"ugill@ee.iitr.ac.in"} link={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ugill@ee.iitr.ac.in"} />
                            <LinkButton icon={call} label={"+91 85728 45414"} link={"tel:+918572845414"} />
                            <LinkButton icon={facebook} label={"facebook"} link={"https://www.facebook.com/utkarsh.gill.108"} />
                            <LinkButton icon={instagram} label={"Instagram"} link={"https://www.instagram.com/utkarshgill07/"} />
                        </div>
                        <div id="group2" className="link-group">
                            <LinkButton icon={linkedin} label={"LinkedIn"} link={"https://in.linkedin.com/in/utkarsh-gill-9a5029173"} />
                            <LinkButton icon={github} label={"GitHub"} link={"https://github.com/qroach"} />
                            <LinkButton icon={dribbble} label={"dribbble"} link={"https://dribbble.com/utkarshgill07"} />
                            <LinkButton icon={behance} label={"Behance"} link={"https://www.behance.net/utkarshgill07/"} />
                        </div>
                    </div>


                </div>
        )
    }
}

export default Contact;