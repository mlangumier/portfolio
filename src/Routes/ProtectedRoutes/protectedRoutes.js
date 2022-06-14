import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
// import { getUser } from "redux/actions/client";

export const PrivateRoutes = ({ authorizations, component: RouteComponent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { user } = useSelector((state) => state)
  const tokenLogged = user?.authToken
  // Token from LocalStorage
  const tokenLocal = localStorage.getItem('portfolio:app:user')
  // Select which one is present
  const authToken = tokenLogged || tokenLocal
  // Check for user permission
  const hasRequiredRole = user && authorizations.includes(user.role) ? true : false
  // Will display component if OK
  const [ displayComponent, setDisplayComponent ] = useState(false)

  // user: authToken, isLoggedIn, role

  const handleRedirection = () => {
    navigate('/login')
  }

  let auth = false;
  const handleAuthVerification = () => {
    if (!user) {
      if (authToken) {
        dispatch(getUser()).then(() => setDisplayComponent(true))
      } else {
        handleRedirection()
      }
    } else if (user) {
      auth = user && authToken && hasRequiredRole;
      return auth ? setDisplayComponent(true) : handleRedirection()
    } else {
      handleRedirection()
    }
  }
  
  useEffect(() => {
    handleAuthVerification()
  }, [authToken])

  return (
    <>
      {displayComponent && <RouteComponent />}
    </>
  )

}


export const USER_ROLE = {
  ADMIN: 'admin',
  CLIENT: 'client',
}