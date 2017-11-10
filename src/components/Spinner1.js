import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${spin} 4s infinite linear;
  width: 10%;
  height: auto;
`;

const Spinner1 = () => <Image src="../public/images/load2.png" alt="loading indicator" />;

export default Spinner1;
