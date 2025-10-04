import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../features/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout()
            .then(()=>{
                dispatch(logout())
            }).catch ((error)=>{
            console.log("Logout Button :: error", error)})
        
    }
  return (
    <button className='inline-block px-6 py-6 duration-200 hover:bg-blue-200 rounded-full '></button>
  )
}

export default LogoutBtn