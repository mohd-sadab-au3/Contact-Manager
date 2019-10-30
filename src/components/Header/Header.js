import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = (props) => {

    const { branding } = props;
    return (
        <nav className="navbar navbar-expand bg-danger navbar-dark mb-3 py-3">
            <div className="container">
                <NavLink to="/" exact className="navbar-brand">{branding}</NavLink>
            </div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/" exact className="nav-link"><i className="fas fa-home">Home</i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact/add" exact className="nav-link"><i className="fas fa-plus">
                        Add</i></NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink to="/about" exact className="nav-link"><i className="fas fa-question">
                        About</i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

Header.defaultProps = {
    branding: "Contact Manager"
}

export default Header;