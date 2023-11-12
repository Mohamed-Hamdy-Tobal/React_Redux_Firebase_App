import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = ({title, createdAt}) => {
    return (
        <div className="card z-depth-0 project-summary pro-card">
            <div className="card-content grey-text text-darken-3">
                <span className="card-tit">{title}</span>
                <p className='name'>Mohamed Hamdy</p>
                <span className="grey-text date-created">{createdAt}</span>
                <Link to={`project/${'1'}`} className='btn btn-primary info'>Info</Link>
            </div>
        </div>
    )
}

export default ProjectSummary