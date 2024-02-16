import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownSvg } from "../../assets/crown.svg";
import "./navigation.style.scss";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownSvg className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/cred">
            Cred
          </Link>
          <Link className="nav-link" to="/shop">
            Cart
          </Link>
          <Link className="nav-link" to="/mui">
            MUI
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};
