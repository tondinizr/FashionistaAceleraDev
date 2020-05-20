import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiShoppingOutline, mdiMagnify } from "@mdi/js";
import logo from "../../_assets/logo.bmp";

import "./navbar.scss";

import { sidebarActions } from "../../_actions";

const Navbar = ({ cartItems, dispatch }) => {
  const handleAction = (action, sidebar) => dispatch(action(sidebar));

  return (
    <header className="header">
      <nav className="navbar w-full flex">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Fashionista" className="logo" />
          </Link>

          <ul className="navbar__items flex">
            <li className="navbar__item">
              <button
                className="btn"
                onClick={() =>
                  handleAction(sidebarActions.showSidebarCart, "search")
                }
              >
                <Icon
                  path={mdiMagnify}
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                />
              </button>
            </li>
            <li className="navbar__item">
              <button
                className="btn"
                onClick={() =>
                  handleAction(sidebarActions.showSidebarCart, "cart")
                }
              >
                <Icon
                  path={mdiShoppingOutline}
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                />
                <span className="navbar__badge flex items-center justify-center">
                  {cartItems}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  const {
    sidebar,
    cart: { count },
  } = state;
  return {
    sidebar,
    cartItems: count,
  };
};

export default connect(mapStateToProps)(Navbar);
