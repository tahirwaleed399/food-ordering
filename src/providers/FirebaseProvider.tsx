"use client";
import React from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import {  useDispatch } from 'react-redux';
import { firebase_app } from '../firebase/init';
import { User } from '../lib/types';
import { hideLoader, showLoader } from '../features/app/loaderSlice';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext<{user : User | null}>({user : null});

export const useAuthContext = () => React.useContext(AuthContext);
const AuthContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [user, setUser] = React.useState<User | null>(null);
    const dispatch = useDispatch();
  
    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
        dispatch(showLoader());
  if(authUser){

          setUser(authUser as User);
     
  }else {
          setUser(null);


  }
  dispatch(hideLoader());
  
      });
  
      return () => unsubscribe();
    }, [dispatch]);
  
    return (
      <AuthContext.Provider value={{ user } as {user : User}}>
        {children}
      </AuthContext.Provider>
    );
  };
  
export default AuthContextProvider;