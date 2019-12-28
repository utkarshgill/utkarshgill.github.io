import React from 'react';
import ProjectCard from '../components/ProjectCard.js';
import ODINcover from '../images/test.jpg';
import ODINbanner from '../images/test-ls.jpg';

class Work extends React.Component {
    render() {
        if(this.props.status===0) {
        return (
            <div className="parent-box">
                <div className="card-holder">
                    <ProjectCard
                    index={1}
                    thumbnail={ODINcover}
                    banner={ODINbanner}
                    genre="PRODUCT DESIGN"
                    title="ODIN - The Marketplace Cerebrum"
                    client="Wheelseye"
                    brief="ODIN is a supply-demand management portal for a 
                    logistics based startup - Wheelseye. It is an internal 
                    product mainly used by the employees.

                    ODIN is a supply-demand management portal for a 
                    logistics based startup - Wheelseye. It is an internal 
                    product mainly used by the employees.
                    
                    ODIN is a supply-demand management portal for a 
                    logistics based startup - Wheelseye. It is an internal 
                    product mainly used by the employees."
                    duration="2 months (Dec ‘19 - Jan ‘20)"
                    roles="User Research
                    User Interviews
                    Journey Mapping"
                    medium={"https://www.behance.net/gallery/81553689/Kookerr-A-hands-free-cooking-app-concept-UIUX"}
                    behance={"https://www.behance.net/gallery/81553689/Kookerr-A-hands-free-cooking-app-concept-UIUX"}
                    />
                </div>
            </div>
        )}
        return null;
    }
}

export default Work;