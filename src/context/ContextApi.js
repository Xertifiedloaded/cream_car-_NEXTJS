"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
export const UserContext = createContext()
export default function ContextApi({ children }) {
    const [loading, setLoading] = useState(true);
    const CreateUserContext = UserContext.Provider
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, [loading]);

    const value = {
        loading,
        setLoading
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
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("this context is not inside usecontext")
    }
    return context

}