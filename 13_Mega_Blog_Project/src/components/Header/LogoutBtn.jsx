// Creating a logout button as a component because we want this to enable only when the user is logged in.
import React from 'react';
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';


// Now, for logging out we need to dispatch something for that we need store to get the action done

function LogoutBtn() {
    const dispatch = useDispatch()

    // Since "LogOut" is a button there is some event happening to handle that creating a method
    const logoutHandler = () =>{
        // Here calling the logout method from authService and one it has performed its work we have to update the store as well so dispatching the reducer logout() which sets the userData as null and status as false.
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutBtn