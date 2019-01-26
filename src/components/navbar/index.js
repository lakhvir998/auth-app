import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from 'prop-types'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

import {  isLoggedIn, logout } from "../../services/auth"

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (
      <div>
        <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">{this.props.siteTitle}</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              {isLoggedIn() &&
                <NavItem>
                  <Link to="/app/profile" className="nav-link">Profile</Link> 
                </NavItem>
              }
            </Nav>
            <Nav className="ml-auto" navbar>
            {isLoggedIn() ?
              <NavItem>
                <a className="nav-link" href="/" onClick={event => { event.preventDefault(); logout(() => navigate(`/app/login`))}}>Logout</a>
              </NavItem> :(<>
              <NavItem>
                <Link to="/app/login" className="nav-link">Login</Link> 
              </NavItem>
              <NavItem>
                <Link to="/app/signup" className="nav-link">Signup</Link> 
              </NavItem>
              </>)
              
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar;

