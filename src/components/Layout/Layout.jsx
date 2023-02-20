import Navigation from 'components/Navigation/Navigation';

import { Outlet, useParams } from 'react-router-dom';

const Layout = () => {
const {userId} = useParams()
  return (
    <>
      <header>
        {!userId && <Navigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
