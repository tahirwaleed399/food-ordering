
import {
  GoogleAuthProvider,
 
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/init";
import { useAppDispatch } from "../hooks/redux-hooks";
import { hideLoader, showLoader } from "../features/app/loaderSlice";
import { useAuthContext } from "../providers/FirebaseProvider";
import Logo from "../components/common/Logo";
export const dynamic = 'force-dynamic';
const Page = () => {
  const { user} = useAuthContext()
console.log(user)
 

  const dispatch = useAppDispatch();




 
  // handling form submission
  
  const SignInWithGoogle= async()=>{
    dispatch(showLoader());

    try {

      const googleProvider = new GoogleAuthProvider();
      googleProvider.setCustomParameters({

      })
      const res = await signInWithPopup(auth, googleProvider);

     
      return res;
    } catch (err) {
      return err;
    }finally{
      dispatch(hideLoader());

    }
  }
  return (
   <>
   <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
  <div className="flex justify-center flex-col items-center">
    <Logo></Logo>
    <h2 className="mt-5 mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>

    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={SignInWithGoogle}>
<svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
Sign in with Google
</button>
  </div>

  
</div>
   </>

  );
};

export default Page;