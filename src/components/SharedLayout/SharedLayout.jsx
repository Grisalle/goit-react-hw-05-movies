import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink className={css.navLink} to="/" end>
          Home
        </NavLink>
        <NavLink className={css.navLink} to="/movies">
          Movies
        </NavLink>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
