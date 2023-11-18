import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItemDetails } from '../Store/Reducers/projectReducer'
import Loading from '../Components/Loading'


const ProjectDetails = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {singlePro, loading, error} = useSelector(state => state.projectRed)
    const singleDate = singlePro.createdAt
    // console.log(Object.values(singlePro.createdAt))
    console.log(singlePro)

    useEffect(() => {
        dispatch(fetchItemDetails(params.proID))
    }, [dispatch,params.proID])
    
    return (
        <div className="container section project-details">
            <Loading loading={loading} error={error}>
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{singlePro.title}</span>
                        <p className='pro-content'>
                            {singlePro.content}
                        </p>
                    </div>
                    <div className="card-action lighten-4 grey-text grey">
                        <p>That Posted By {singlePro.authorFirstName} {singlePro.authorLastName}</p>
                        <p className="grey-text date">{singleDate ? singleDate : ""}</p>
                    </div>
                </div>
            </Loading>
        </div>
    )
}

export default ProjectDetails