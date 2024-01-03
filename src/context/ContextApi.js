"use client"
import React, { createContext, useContext } from 'react'
export const UserContext = createContext()
const CreateUserContext = UserContext.Provider
export default function ContextApi({ children }) {
    const value = {

    }
    return (
        <>
            <CreateUserContext value={value}>
                {children}
            </CreateUserContext>
        </>
    )
}
export const useUserContext = () => {
    const context = useContext(CreateUserContext)
    if (!context) {
        throw new Error("this context is not inside usecontext")
    }

    return context

}