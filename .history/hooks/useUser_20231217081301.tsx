import React,{createContext, useContext} from 'react'


type UserContextType = {
    user: string | null,
    isLoading: boolean,
    userDetails:  {} | null,
}
export const UserContext = createContext<UserContextType | undefined>(
    undefined
)

// export default useUser
