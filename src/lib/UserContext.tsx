import { createContext } from 'react'
export type User = {
	id: string
	name: string
	email: string
	issuer: boolean
	publicAddress: string
}
export type UserContextType = {
  user : User | null, 
  setUser : React.Dispatch<React.SetStateAction<User | null>>
}
export const UserContext = createContext<UserContextType | null>(null)
