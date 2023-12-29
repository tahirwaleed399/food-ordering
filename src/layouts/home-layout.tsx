// HomeLayout.js
import { Outlet } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

const HomeLayout = () => {
  return (
    <div>
        <Header></Header>
<div className='container mx-auto'>

      <Outlet /> 
</div>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
