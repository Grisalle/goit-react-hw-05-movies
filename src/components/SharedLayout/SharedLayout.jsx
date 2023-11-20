import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <section className="sectionHeader">
        <div className="container">
          <header className={css.header}>
            <NavLink className={css.navLink} to="/" end>
              Home
            </NavLink>
            <NavLink className={css.navLink} to="/movies">
              Movies
            </NavLink>
          </header>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
