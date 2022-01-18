import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#037a74af' }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <h3>AZZELYA</h3>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/React-Portofolio-Azzel/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/React-Portofolio-Azzel/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/React-Portofolio-Azzel/project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/React-Portofolio-Azzel/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
