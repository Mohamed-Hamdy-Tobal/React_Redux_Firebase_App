import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = () => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-tit">Project Title</span>
                <p>That Posted By Mohamed Tobal</p>
                <span className="grey-text date">11rd November, 8pm</span>
                <Link to={`project/${'1'}`} className='btn btn-primary'>Info</Link>
            </div>
        </div>
    )
}

export default ProjectSummary