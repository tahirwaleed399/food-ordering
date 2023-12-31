
import { getLoaderState } from '../../features/app/loaderSlice';
import { useAppSelector } from '../../hooks/redux-hooks';

const Loader = ({ stationary }: { stationary?: boolean | undefined }) => {
  const loaderShow = useAppSelector(getLoaderState);
  const isStationary : boolean = stationary === undefined ? false : !!stationary;
  return (loaderShow || isStationary ?
    <div className='h-screen w-screen bg-primary bg-opacity-70 grid place-items-center fixed top-0 left-0 z-10 text-white'><span className="loader"></span></div> : <div></div>
  )
}

export default Loader