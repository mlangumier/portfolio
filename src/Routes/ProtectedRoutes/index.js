import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { doc, getDoc } from "firebase/firestore";
import { database } from "Services/firebase";


import { setUser } from "Redux/User/userSlice";
import { PATH_LOGIN } from 'Routes/CONSTANTS'

export const ProtectedRoutes = ({ authorizations, component: RouteComponent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { user } = useSelector((state) => state)
  const tokenLogged = user?.token
  // Token from LocalStorage
  const tokenLocal = localStorage.getItem('portfolio:app:user')
  // Select which one is present
  const token = tokenLogged || tokenLocal
  // Check for user permission
  const hasRequiredRole = user && authorizations.includes(user.role) ? true : false
  // Will display component if OK
  const [ displayComponent, setDisplayComponent ] = useState(false)

  // user: token, isLoggedIn, role

  const handleRedirection = () => {
    navigate(PATH_LOGIN)
  }

  const findUser = async (user) => {
    const userRef = doc(database, "users", user)
    const snap = await getDoc(userRef)
    if (snap.data()) {
      dispatch(setUser(snap.data()))
    }
  }

  let auth = false;
  const handleAuthVerification = async () => {
    if (!user?.role) {
      if (token) {
        findUser(token)
      } else {
        handleRedirection()
      }
    } else if (user) {
      auth = user && token && hasRequiredRole;
      return auth ? setDisplayComponent(true) : handleRedirection()
    } else {
      handleRedirection()
    }
  }
  
  useEffect(() => {
    handleAuthVerification()
  }, [token])

  return (
    <>
      {displayComponent && <RouteComponent />}
    </>
  )
}

export const USER_ROLE = {
  ADMIN: 'admin',
  USER: 'user',
}