"use client";


import React, { useEffect } from 'react';
import { useAuthContext } from '../providers/FirebaseProvider';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/loader';
export const dynamic = 'force-dynamic';

const NotAuthenticatedPage = ({children}:{children : React.ReactNode}) => {
    const {user} : any = useAuthContext();
    const navigate = useNavigate();

    useEffect(()=>{
    
if(user){
  const isFromSignInLink = localStorage.getItem('isSigningInWithEmailLink');
  if (isFromSignInLink) {
    localStorage.removeItem('isSigningInWithEmailLink'); // Clean up
    navigate('/');
  }else {
    // Try to go back, but have a fallback
    navigate(-1)

}
    }
},[user,navigate]);

  return (
!user ?  children : <Loader stationary/>
  )
}

export default NotAuthenticatedPage