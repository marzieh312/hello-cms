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
      <div className={styles.appLayout}>
        <Navbar color="light" light expand="md" fixed="top">
          <LinkContainer to="/">
            <NavbarBrand href="" className="mr-auto">
              Hello CMS
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/faqs">FAQ</NavLink>
              </NavItem>
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