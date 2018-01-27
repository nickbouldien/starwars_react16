import React from 'react';
import { Image, Segment, Header, Divider } from 'semantic-ui-react';
import RenderText from './RenderText';

const OtherComponent = (props) => (
  <Segment>
    <Header as="h3">{props.title}</Header>
    <Image src={props.imgSource} alt={"star wars gif"} />
    <Divider />
    <RenderText straightText="yessir" />
  </Segment>
);

export default OtherComponent;
