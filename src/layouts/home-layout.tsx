// HomeLayout.js
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
        header
      {/* Your layout structure here */}
      <Outlet /> {/* Nested routes will render here */}

      footer
    </div>
  );
};

export default HomeLayout;
