import React from 'react'

import { projects } from '../project_data'

class WorkNav extends React.Component {
    render() {
        if(this.props.page === -1 ) this.visibility = "dots-initial" 
        else if (this.props.page > 0 && this.props.page <= projects.length) this.visibility = "dots-visible" 
        else this.visibility = "dots-hidden"
        
        return (
            <div id={this.visibility} className="dots-container">
                {projects.map((elem, index) => { let id = (index + 1) === this.props.page ? "selected"  : null 
                                                    return <a href={"#" + elem.url} ><div id = {id} className="dot" /></a>
                                                })}
            </div>
        )
    }
}

export default WorkNav