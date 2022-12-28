import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link to="/sign-in" className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
