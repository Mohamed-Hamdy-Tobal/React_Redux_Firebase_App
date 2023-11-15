import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = ({title, createdAt, proID, deleteHandler}) => {
    return (
        <div className="card z-depth-0 project-summary pro-card">
            <div className="card-content grey-text text-darken-3">
                <span className="card-tit">{title}</span>
                <p className='name'>Mohamed Hamdy</p>
                <span className="grey-text date-created">{createdAt}</span>
                <Link to={`project/${proID}`} className='btn btn-primary info'>Info</Link>
                <span className='close-pro'><FontAwesomeIcon icon={faTimes} onClick={() => {deleteHandler(proID)}} style={{ cursor: 'pointer' }} /></span>
            </div>
        </div>
    )
}

export default ProjectSummary