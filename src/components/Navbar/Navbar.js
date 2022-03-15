import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import logo from "../../assets/svg/logo.svg";
import { ReactComponent as Logo } from '../../assets/svg/logo_2.svg';
import { TiThMenuOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

import './Navbar.scss';

const Navbar = () => {
  const [validatePerfil, setValidatePerfil] = useState(false);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  let location = useLocation();
  let position = location.pathname;
  useEffect(() => {
    setValidatePerfil(position.includes('/perfil'));
  }, []);

  const handleLogout = () => {
    dispatch({ type: types.logout });

    navigate('/login', {
      replace: true
    });
    setValidatePerfil(true);
  };

  const handlePerfil = () => {
    navigate('/perfil', {
      replace: true
    });

    setValidatePerfil(true);
  };
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark">
      <Link
        className="navbar-brand"
        to="/"
        onClick={() => setValidatePerfil(false)}
      >
        {/* <img src={logo} className="navbar-logo" alt="" /> */}
        <Logo className="navbar-logo" fill="white" />
        QPCode
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <TiThMenuOutline color="white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link ' + (isActive ? 'active' : '')
            }
            onClick={() => setValidatePerfil(false)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link ' + (isActive ? 'active' : '')
            }
            onClick={() => setValidatePerfil(false)}
            to="/fakestore"
          >
            Fakestore
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link ' + (isActive ? 'active' : '')
            }
            onClick={() => setValidatePerfil(false)}
            to="/placeholder"
          >
            Placeholder
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link ' + (isActive ? 'active' : '')
            }
            onClick={() => setValidatePerfil(false)}
            to="/about"
          >
            About
          </NavLink>
          {user.userApisProject !== undefined ? (
            <NavLink
              className={({ isActive }) =>
                'nav-item nav-link ' + (isActive ? 'active' : '')
              }
              onClick={() => setValidatePerfil(false)}
              to="/todoapp"
            >
              TodoApp
            </NavLink>
          ) : (
            ''
          )}
          {user.userApisProject !== undefined ? (
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="navbarDropdown"
                to="/x"
              >
                <span className={`${validatePerfil ? 'avtivare' : ''} `}>
                  {user.userApisProject === undefined
                    ? 'Login'
                    : user.userApisProject.names}
                </span>
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button className="dropdown-item" onClick={handlePerfil}>
                    Mi Perfil
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Cerrar Sesion
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            <NavLink
              className={({ isActive }) =>
                'nav-item nav-link ' + (isActive ? 'active' : '')
              }
              to="/login"
              onClick={() => setValidatePerfil(false)}
            >
              Ingresar
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
