import React from 'react';
import { Image, Segment, Header, Divider } from 'semantic-ui-react';
import RenderText from './RenderText';

const OtherComponent = ({ title, imgSource }) => (
  <Segment>
    <Header as="h3">{title}</Header>
    <Image src={imgSource} alt={"star wars gif"} />
    <Divider />
    <RenderText straightText="yessir" />
  </Segment>
);

export default OtherComponent;
