import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {

    const params = useParams()
    console.log(params)
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {params.id}</span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ipsam veritatis delectus exercitationem fugit. Suscipit, ipsam id, nihil ullam quasi tenetur inventore eligendi quae hic, reiciendis ipsum? Sit, deserunt quas?
                    </p>
                </div>
                <div className="card-action lighten-4 grey-text grey">
                    <p>That Posted By Mohamed Tobal</p>
                    <p className="grey-text date">11rd November, 8pm</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails