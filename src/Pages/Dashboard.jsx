import { useCallback, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Notifications } from '../Components/Dashboard/Notifications'
import { ProjectList } from '../Components/Dashboard/ProjectList'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProject, fetchData } from '../Store/Reducers/projectReducer'
import Loading from '../Components/Loading'

export const Dashboard = () => {

    const dispatch = useDispatch()
    const {projects, loading, error} = useSelector(state => state.projectRed)
    const deleteHandler = useCallback((id) => dispatch(deleteProject(id)), [dispatch])

    useEffect(() => {
        // 1) Fetches Data
        const data = async() => {
            await dispatch(fetchData())
        }
        data()
    }, [dispatch])


    return (
        <div className='dashboard position-relative'>
            <Container>
                <Loading loading={loading} error={error}>
                    <div className="row justify-content-between main-content">
                        <div className="col-lg-6"><ProjectList projects={projects} deleteHandler={deleteHandler}/></div>
                        <div className="col-lg-5"><Notifications/></div>
                    </div>
                </Loading>
            </Container>
        </div>
    )
}
