import React from 'react';

const Header = (props) => {

    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-expand-md bg-danger navbar-dark mb-3 py-3">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
            </div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
            </ul>
        </nav>
    )

}

Header.defaultProps = {
    branding: "Contact Manager"
}

export default Header;