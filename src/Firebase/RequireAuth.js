import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export const RequireAuth = ({children}) => {
    const {currentUser} = useSelector(state => state.authRed)
    console.log(Object.values(currentUser).length)
    const location = useLocation()
    
    if (Object.values(currentUser).length < 1) {
        return <Navigate to='/signin' state={{path: location.pathname}}/>
    } 
    return children
} 
