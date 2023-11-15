import React from 'react'
import ProjectSummary from '../../Pages/ProjectSummary'

export const ProjectList = ({projects, deleteHandler}) => {
    console.log("Projects", projects)

    const singlePro = projects.map((item, idx) => {
        return (
            <ProjectSummary 
            deleteHandler={deleteHandler}
            title={item.title} 
            content={item.content} 
            createdAt={item.createdAt} 
            proID={item.id}
            key={idx}/>
        )
    })

    return (
        <div className='project-list'>
            {singlePro}
        </div>
    )
}
