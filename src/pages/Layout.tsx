import { Outlet } from 'react-router-dom';
import Header from '../components/nav-components/Header';
import Footer from '../components/nav-components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;