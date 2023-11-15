import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProject } from '../Store/Reducers/projectReducer'
import {useNavigate} from 'react-router-dom'

const userInfo = {title:'', content: ''}

const CreateProject = () => {


    const [user, setUser] = useState(userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        setUser(userInfo)
        await dispatch(addProject(user))
        navigate('/')
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