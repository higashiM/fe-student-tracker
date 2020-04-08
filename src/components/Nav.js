import React, { Component } from "react";
import { Link } from "@reach/router";

export default class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">
              <h3>summary</h3>
            </Link>
          </li>

          <h2>students </h2>
          <li>
            <Link to="/detailed/all">
              <h3>all</h3>
            </Link>
          </li>
          <li>
            <Link to="/detailed/fun">
              <h3>fundamentals</h3>
            </Link>
          </li>
          <li>
            <Link to="/detailed/be">
              <h3>back-end</h3>
            </Link>
          </li>
          <li>
            <Link to="/detailed/fe">
              <h3>front-end</h3>
            </Link>
          </li>
          <li>
            <Link to="/detailed/proj">
              <h3>projects</h3>
            </Link>
          </li>
          <li>
            <Link to="/add">
              <h3>add new</h3>
            </Link>
          </li>
          <li>
            <h2>graduates</h2>
            <li>
              <Link to="/hof">
                <h3>hall of fame</h3>
              </Link>
            </li>
          </li>
        </ul>
      </nav>
    );
  }
}
