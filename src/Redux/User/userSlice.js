import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from 'Redux/store'
// import { getDatabase, ref, set, get, child, push, update, onValue } from 'firebase/database'
// import { firebaseApp } from 'Services/firebase'
// import { randomNumber } from 'Functions/randomNumber'
// import { useState } from 'react'
// import { async } from '@firebase/util'
// const database = getDatabase(firebaseApp)

export const initialState = {
  id: '0000',
  name: 'Visitor',
  isConfirmed: false,
  movies: [],
  todos: [],
}

//REDUCERS (à séparer dans différents fichiers)
// type State = {
//   id: string,
//   name: string,
//   isConfirmed: boolean,
// }
// const createUserSlice: CaseReducer<State, PayloadAction<UserState>> = (state, action) => {
//   state.id = action.payload.id,
//   state.name = action.payload.name,
// }


export const userSlice = createSlice({
  name: 'user', 
  initialState,
  //* Possibility: 
  // reducers: {
  //   otherReducer,
  // }
  reducers: {
    // createUser: (state, { payload }) => {
    //   localStorage.setItem("portfolio:app:user", JSON.stringify(payload))
    //   set(ref(database, `users/${payload.id}`), {...payload})
    //   return {
    //     ...state,
    //     id: payload.id,
    //     name: payload.name,
    //     isConfirmed: payload.isConfirmed
    //   };
    // },
    // getUser: (state, { payload }) => {
    //   const userRef = ref(database, `user/${payload}`);
    //   onValue(userRef, (snapshot) => {
    //     const data = snapshot.val()
    //     console.log('DATA:', data)
    //   })
      // get(child(database, `user/${payload}`)).then((snapshot) => {
      //   console.log("SNAPSHOT", snapshot.val())
      // })
    // }
  },
})

// const getUserFn = (id:string) => {
//   const database = ref(getDatabase(firebaseApp))
//   get(child(database, `users/${id}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log('GETUSERFN:', snapshot.val())
//       return snapshot.val()
//     } else {
//       return "No data available"
//     }
//   }).catch((error) => {
//     console.log('ERROR:', error)
//   })
// }

export const storeSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    // getAllUsers: (state) => {
    //   // https://youtu.be/azdwN_4IDKA?t=669
    //   const userRef = ref(database, `users`)
    //   onValue(userRef, (snapshot) => {
    //     const data = snapshot.val()
        // if (data !== null) {
        //   console.log('ENTERS GET USERS')
        //   Object.values(data).map((user) => {
        //     console.log('1-USER:', user)
        //   })
        // }
    //   })
    // },

  }
})

// export const { createUser, getUser } = userSlice.actions
// export const { getAllUsers } = storeSlice.actions
// export const selectUser = (state) => state.user

export default userSlice.reducer