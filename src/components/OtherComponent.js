import React from 'react';
import { Image } from 'react-bootstrap';

const OtherComponent = (props) => (
  <div>
    <h3>{props.title}</h3>
    <Image src={props.imgSource} alt="star wars gif"/>
  </div>
);

export default OtherComponent;
