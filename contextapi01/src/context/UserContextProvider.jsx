import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children})=>{

    const [user, setUser] = useState('');
    // returns us provider


    return (
        <UserContextProvider.Provider value={{user, setUser}}>
            {children}
        </UserContextProvider.Provider>
    )
}

export default UserContextProvider