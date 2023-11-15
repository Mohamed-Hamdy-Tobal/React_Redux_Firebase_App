import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Notifications } from '../Components/Dashboard/Notifications'
import { ProjectList } from '../Components/Dashboard/ProjectList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../Store/Reducers/projectReducer'
import Loading from '../Components/Loading'

export const Dashboard = () => {

    const dispatch = useDispatch()
    const {projects, loading, error} = useSelector(state => state.projectRed)
    console.log(projects)

    const datenow = new Date()
    console.log(datenow)

    useEffect(() => {
        // 1) Fetches Data
        dispatch(fetchData())
    }, [dispatch])


    return (
        <div className='dashboard position-relative'>
            <Container>
                <Loading loading={loading} error={error}>
                    <div className="row justify-content-between">
                        <div className="col-lg-6"><ProjectList projects={projects}/></div>
                        <div className="col-lg-5"><Notifications/></div>
                    </div>
                </Loading>
            </Container>
        </div>
    )
}
