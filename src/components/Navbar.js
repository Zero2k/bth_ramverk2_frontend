import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Menu,
  Image,
  Container,
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Root = styled.div``;

const NavLink = () => ({
  render() {
    const isActive = this.context.router.route.location.pathname === this.props.to;
    const className = isActive ? 'active' : '';

    return (
      <Menu.Item as={Link} className={className} {...this.props} >{this.props.children}</Menu.Item>
    );
  }
});

const Navbar = () => ({
  render() {
    return (
      <Root>
        <Menu size='large'>
          <Container>
            <Menu.Item header>
              <Image
                size='mini'
                src='/favicon.ico'
                style={{ marginRight: '1.5em' }}
              />
              Ramverk2
            </Menu.Item>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/report">Reports</NavLink>
            <NavLink to="/about">About</NavLink>
            <Menu.Item position='right'>
              <Button as={Link} to='/login'>Log in</Button>
              <Button as={Link} to='/signup' style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Root>
    );
  }
});

NavLink.contextTypes = {
  router: PropTypes.object
};

export default Navbar;
