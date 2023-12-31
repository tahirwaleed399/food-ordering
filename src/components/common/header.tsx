import Logo from './Logo';
import {
  Bars3Icon,
  HomeIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  toggleMenu,
} from '../../features/app/appSlice';
import { useAppSelector } from '../../hooks/redux-hooks';
import { useAuthContext } from '../../providers/FirebaseProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/init';


const Header = () => {
  const dispatch = useDispatch();
  const {user } = useAuthContext();
  const { isMenuOpen } = useAppSelector((state) => state.app);
  const isAuthenticated= user ? true : false;

  
  const handleToggleMenu = () => dispatch(toggleMenu());
const logout = () => {signOut(auth)}

  return (
    <header className='sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100'>
      <div className='container flex justify-between items-center  mx-4 md:mx-auto'>
        <div className='flex items-center gap-2 md:gap-4'>
          <Logo />

      
        </div>


        <ul className='text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex'>
          
          <li>
            <Link
              to='/'
              className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <HomeIcon className='w-4 h-4 text-gray-700' />{' '}
              <p className='hidden md:block'>Home</p>
            </Link>
          </li>
       
          
          <li>
            <Link
              to='/cart'
              className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
              <p className='hidden md:block'>Cart</p>
              {
                <p className='absolute -top-1 -right-1 bg-primary text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                  {/* {items.length} */}
                  2
                </p>
              }
            </Link>
          </li>
        </ul>
        { isAuthenticated ? (
          <button
            onClick={logout}
            className='ml-4 bg-primary text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
          <button
           className='ml-4 bg-primary text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
           >
            Login
          </button>
            </Link>
        )}

        {!isMenuOpen ? (
          <div className='shadow-lg transition-all fixed top-full -right-[100%] bg-white h-screen p-4 px-8'>
            <>
              <ul className='text-zinc-700 space-y-4'>
               
                <li>
                  <Link
                    to='/'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <HomeIcon className='w-4 h-4 text-gray-700' /> <p>Home</p>
                  </Link>
                </li>
               
               
                <li>
                  <Link
                    to='/cart'
                    className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>Cart</p>
                    {
                      <p className='absolute -top-1 -right-1 bg-primary text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                        {/* {items.length} */}
                        20
                      </p>
                    }
                  </Link>
                </li>
              </ul>
              { isAuthenticated ? (
                <button
                  onClick={logout}
                  className='ml-4 bg-primary text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                >
                  Logout{' '}
                </button>
              ) : (
                <Link to={'/login'}>
                <button
                  onClick={() => {}}
                  className='ml-4 bg-primary text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                  >
                  Login
                </button>
                  </Link>
              )}
            </>
          </div>
        ) : (
          <div className='shadow-lg transition-all md:hidden absolute top-full right-0 bg-white h-screen p-4 px-8'>
            <>
              <ul className='text-zinc-700 space-y-4'>
              
                <li>
                  <Link
                    to='/'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <HomeIcon className='w-4 h-4 text-gray-700' /> <p>Home</p>
                  </Link>
                </li>
              
                
                <li>
                  <Link
                    to='/cart'
                    className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>Cart</p>
                    {
                      <p className='absolute -top-1 -right-1 bg-primary text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                        {/* {items.length} */}
                        20
                      </p>
                    }
                  </Link>
                </li>
              </ul>
              { isAuthenticated ? (
                <button
                  onClick={() => {}}
                  className='ml-4 bg-primary text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                >
                  Logout{' '}
                </button>
              ) : (
                <button
                  onClick={() => {}}
                  className='ml-4 bg-primary text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                >
                  Login
                </button>
              )}
            </>
          </div>
        )}

        <button className='block md:hidden' onClick={handleToggleMenu}>
          <Bars3Icon className='w-6 h-6' />
        </button>
      </div>
    </header>
  );
};
export default Header;
