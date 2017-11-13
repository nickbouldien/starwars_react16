import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
  </ul>
);

const StyledHeader = styled(Header)`
	color: palevioletred;
  background-color: blue;
  list-style: none;
  font-style: none;
	font-weight: bold;
`;

export default StyledHeader;
