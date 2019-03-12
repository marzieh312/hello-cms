import React from 'react';
import {
  Nav,
  Navbar, 
  NavbarBrand,
  NavbarToggler,
  Container,
  Collapse,
  NavItem,
  NavLink
} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import styles from './AppLayout.module.scss'


class AppLayout extends React.Component {
  state = {
    collapsed: false
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className={styles.AppLayout}>
        <Navbar color="light" light expand="md" fixed="top">
          <LinkContainer to="/">
            <NavbarBrand href="">
              Hello CMS
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
              <LinkContainer to="/">
                <NavItem>
                  <NavLink href="">Home</NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/faqs">
                <NavItem>
                  <NavLink href="">FAQ</NavLink>
                </NavItem>
              </LinkContainer>
            </Nav>
          </Collapse>
        </Navbar>
        <Container style={{ paddingTop: 100}}>
          {this.props.children}
        </Container>
      </div>
    )
  }
} 

export default AppLayout;