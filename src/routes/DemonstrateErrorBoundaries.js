import React from 'react';
import { Header, Divider, Container } from 'semantic-ui-react';
import ErrorBoundary from '../components/ErrorBoundary';
import OtherComponent from '../components/OtherComponent';
import ProblematicComponent from '../components/ProblematicComponent';
// import BrokenSidebar from '../components/BrokenSidebar';
import img1 from '../../public/images/may_the_force.gif';
import img2 from '../../public/images/force_will_be_with_you_always.gif';

const DemonstrateErrorBoundaries = () => (
  <Container>
    <Header as={"h1"}>Error Boundary examples: (open up console)</Header>
    {/* Declarative version of try/catch */}

    <Divider />

    <ErrorBoundary>
      <Header as="h3">These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</Header>
      <OtherComponent willThrow="no" imgSource={img1} title="May the force be with you (another component)" />
      <ProblematicComponent willThrow="no" url="https://swapi.co/api/planets/1" />
      <ProblematicComponent willThrow="yup" url="https://swapi.co/api/pasdfasdfasdf/1314" />
    </ErrorBoundary>

    <Divider />

    <Header as="h3">These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</Header>

    <Header as="h4">#3: Below will NOT throw (calls <a href="https://swapi.co/api/planets/1">https://swapi.co/api/planets/1</a>)</Header>
    <OtherComponent willThrow="no" imgSource={img2} title="The force will be with you... always (another component)" />
    <ErrorBoundary><ProblematicComponent willThrow="no" url="https://swapi.co/api/planets/1" /></ErrorBoundary>
    <Header as="h4">#4: Below will throw (gets 404 calling <a href="https://swapi.co/api/pasdfasdfasdf/1314">https://swapi.co/api/pasdfasdfasdf/1314</a>), but doesn't affect #3</Header>
    <ErrorBoundary><ProblematicComponent willThrow="yup" url="https://swapi.co/api/pasdfasdfasdf/1314" /></ErrorBoundary>

    {/* <BrokenSidebar /> */}

  </Container>
)

export default DemonstrateErrorBoundaries;
