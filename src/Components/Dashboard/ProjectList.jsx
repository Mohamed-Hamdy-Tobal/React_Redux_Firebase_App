import React from 'react'
import ProjectSummary from '../../Pages/ProjectSummary'
import page from '../../assets/draft.png'

export const ProjectList = ({projects, deleteHandler}) => {

    const singlePro = projects.map((item, idx) => {
        return (
            <ProjectSummary 
            deleteHandler={deleteHandler}
            title={item.title} 
            content={item.content} 
            createdAt={item.createdAt} 
            authorFirstName={item.authorFirstName}
            authorLastName={item.authorLastName}
            proID={item.id}
            key={idx}/>
        )
    })
    console.log(singlePro)
    console.log(projects)
    return (
        <div className='project-list'>
            {projects.length > 0 ? singlePro: 
            <div className='empty-page'>
                <img src={page} alt='img'/>
                <h3>Not Items Yet.</h3>
            </div>}
        </div>
    )
}
