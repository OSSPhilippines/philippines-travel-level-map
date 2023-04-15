import { Outlet, Link, useLocation } from "react-router-dom";
import ".././App.css"

const Layout = ({ downloadJpg }) => {
  const location = useLocation();
  // Hide the "Save Image" button when the current route is "/"
  const showSaveButton = location.pathname !== "/";

  return (
    <section className="nav">
      <nav className="container">
        <Link className="home" to="/">Home</Link>
      </nav>
      {showSaveButton && (
        <button className="save-image-button" onClick={downloadJpg}>Save Image</button>
      )}
      <Outlet />
    </section>
  )
};

export default Layout;
