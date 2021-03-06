import React, { Component } from "react";

export class DashboardHeader extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://penzbox.com"
          >
            Company Name
          </a>
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="./Welcome">
                Sign out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default DashboardHeader;
