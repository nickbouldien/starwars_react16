import React from 'react';
import { Image } from 'react-bootstrap';
import RenderText from './RenderText';

const OtherComponent = (props) => (
  <div>
    <h3>{props.title}</h3>
    <Image src={props.imgSource} alt="star wars gif"/>
    <br />
    <RenderText straightText="yessir" />
  </div>
);

export default OtherComponent;
