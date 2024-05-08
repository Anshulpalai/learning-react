// Authlayout is a mechanism through which the pages and the routes are protected
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({children, authentication=true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status)

    // useEffect will check for the authentication everytime when there is change in route or page
    useEffect(()=>{
        // Checking if the user is authenticated or not and checking it from the store as well.
        // authentication is true but not equal to authstatus, so this will display "authStatus!=authentication" = true
        if (authentication && authStatus!== authentication) {
            navigate("/login")
        }
        // If the authentication is false and if authstate is true "authStatus!=authentication" = false
        else if(!authentication && authStatus!== authentication) {
            navigate("/")
        }
        setLoader(false)

        // Above if else if can be written using the another condition as well which will work same.
        // if the authStatus is true then that means the user is logged in so we will navigate it to home page, if not true that means the user is not logged in hence return to login page.
        // if (authStatus === true){
        //     navigate("/")
        // } 
        // else if(authStatus === false){
        //     navigate("/login")
        // }
    }, [authStatus, navigate, authentication])

  return loader?<h1>Loading...</h1> : <>{children}</>
}

