"use client";

import React, { useEffect } from 'react';
import { useAuthContext } from '../providers/FirebaseProvider';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/loader';
export const dynamic = 'force-dynamic';

const AuthenticatedPage = ({children}:{children : React.ReactNode}) => {
    const {user} : any = useAuthContext();
    const navigate = useNavigate();
    useEffect(()=>{
    
if(!user){
navigate('/login');

}
    },[user])

  return (
user ?  children : <Loader stationary/>
  )
}

export default AuthenticatedPage;