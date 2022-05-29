import { useState } from "react"
import { InputComponent } from 'Components/Forms/input'
import { Box, Button, Typography } from "@mui/material"
import { collection, getDocs, query, where } from "firebase/firestore"
import { database } from "Services/firebase"
import { useDispatch } from "react-redux"
import { getUser } from "Redux/User/userSlice"

export const SearchUser = () => {
  const dispatch = useDispatch()
  const [ userInfo, setUserInfo ] = useState()
  const [ usersFound, setUsersFound ] = useState([])

  const onChangeUsername = async (target) => {
    setUserInfo({...userInfo, [target?.name]: target?.value })
  }

  // CASE SENSITIVITY

  const searchUser = async () => {
    const usersRef = collection(database, "users")
    const q = query(usersRef, where("name", "==", userInfo?.user))
    const results = await getDocs(q)
    console.log('RESULT:', results.docs.length)
    let tempResults = []
    if (results?.docs?.length > 1) {
      results.forEach((result) => {
        console.log('multiple res:', result.data())
      })
    } else {
      results.forEach((result) => {
        console.log('one res:', result.data())
      })
    }
    setUsersFound(results)
  }

  return (
    <Box sx={{flex:1}}>
      <Typography variant="h5" component="p">Find your username</Typography>
      <Box>
        <InputComponent 
          name="user"
          label="Mathieu#1234"
          onChange={onChangeUsername}
        />
        <Button variant="outlined"  onClick={(e) => searchUser(e)}>Search</Button>
      </Box>
    </Box>
  )
}