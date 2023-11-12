import React from 'react'
import ProjectSummary from '../../Pages/ProjectSummary'

export const ProjectList = ({projects}) => {
    console.log("Projects", projects)

    const singlePro = projects.map((item, idx) => {
        return (
            <ProjectSummary 
            title={item.title} 
            content={item.content} 
            createdAt={item.createdAt} 
            key={idx}/>
        )
    })

    return (
        <div className='project-list'>
            {singlePro}
        </div>
    )
}
