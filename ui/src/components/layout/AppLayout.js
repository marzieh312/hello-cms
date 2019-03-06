import React from 'react';
import {
  Navbar, 
  NavbarBrand,
  Container
} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import styles from './AppLayout.module.scss'

const AppLayout = (props) => (
  <div className={styles.appLayout}>
    <Navbar color="light" light expand="md"  fixed="top">
      <LinkContainer to="/">
        <NavbarBrand href="/">
          <span>Weather Report</span>
        </NavbarBrand>
      </LinkContainer>
    </Navbar>
    <Container>
      {props.children}
    </Container>

  </div>
)

export default AppLayout;