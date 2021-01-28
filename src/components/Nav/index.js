import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

`

const Navbar = (props) => {
  console.log("Navbar Props", props);
  return (
    <Nav>
      <div></div>
      <Burger handlePageChange={props.handlePageChange} />
    </Nav>
  );
};

export default Navbar