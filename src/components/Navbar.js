import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  static defaultProps = {
    category: "general",
    country: "in",
    pageSize: 12,
  };
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link
              style={{
                fontWeight: "bold",
                fontFamily: "Dosis",
                fontSize: "39px",
              }}
              className="navbar-brand"
              to="/"
            >
              <span
                style={{
                  color: "rgba(58, 172, 255, 1)",
                  fontWeight: "bold",
                  fontFamily: "Dosis",
                  fontSize: "39px",
                }}
              >
                News
              </span>
              Dose
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav mr-auto mb-2 mb-lg-0"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Dosis",
                  fontSize: "19px",
                  paddingRight: "6px",
                }}
              >
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
