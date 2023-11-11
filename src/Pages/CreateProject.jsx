import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const userInfo = {title:'', content: ''}

const CreateProject = () => {

    const globalAuth = useSelector(state => state.authRed)
    const globalProject = useSelector(state => state.projectRed)
    console.log(globalAuth)
    console.log(globalProject)

    const [user, setUser] = useState(userInfo)

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        setUser(userInfo)
    }

    return (
        <div className="sign-page sec-padd">
            <div className='container'>
                <form action="" className="white" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3 page-head">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title : </label>
                        <input type="text" name="title" id="title" onChange={handleUser} value={user.title}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content : </label>
                        <textarea name="content" id="content" onChange={handleUser} value={user.content} className='materialize-textarea'></textarea>
                    </div>
                    <div className="input-field">
                        <button className='btn btn-primary'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProject