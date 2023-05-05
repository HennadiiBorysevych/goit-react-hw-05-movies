import { Outlet, Link } from 'react-router-dom';
import { Header, NavList, NavListItem } from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <NavListItem>
              <Link to="/">Home</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/movies">Movies</Link>
            </NavListItem>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
