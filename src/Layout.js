import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <main><header></header></main>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="#" to="/">Admin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#" to="/public">Public</Link>
          </li>

        </ul>
      </nav>
    <article>
      <Outlet />
      </article>
      <footer className="text-center">Brátis Marianna</footer>
    </>
    
  )
};
export default Layout;