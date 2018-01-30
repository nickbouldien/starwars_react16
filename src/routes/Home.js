import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, List, Button, Segment } from 'semantic-ui-react';

const Home = () => (
  <Container>
    <Header as={"h1"}>
      Welcome, young <a href="http://starwars.wikia.com/wiki/Padawan" target={"_blank"} rel={"noopener"}>padawans</a>
    </Header>

    <Header as={'h3'}>
      This is just a small "project" to explore some of the new features of <a href="https://reactjs.org/blog/2017/09/26/react-v16.0.html" target="_blank"> React 16</a>, 
      (with a star wars theme, of course)
    </Header>

    <Header as={"h3"}>Links to the routes: </Header>

    <Segment>

      <List divided animated relaxed>

        <List.Item as={Link} to={"portal"}>
          <List.Content>
            <List.Header>Portal</List.Header>
            Portals in React 16
          </List.Content>
        </List.Item>

        <List.Item as={Link} to={"return-array"}>
          <List.Content>
            <List.Header>Return Array</List.Header>
            Returning an array in React 16
          </List.Content>
        </List.Item>

        <List.Item as={Link} to={"error-boundary"}>
          <List.Content>
            <List.Header>Error Boundary</List.Header>
            Error Boundaries in React 16
          </List.Content>
        </List.Item>

        <List.Item as={Link} to={"custom-attributes"}>
          <List.Content>
            <List.Header>Custom Attributes</List.Header>
            Custom Attributes in React 16
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            <List.Header as={Link} to={"test"}>Test Route</List.Header>
            Test route to check response from <a href={"https://swapi.co/"} target={"_blank"} rel={"noopener"}>Swapi</a>
          </List.Content>
        </List.Item>

      </List>
    
    </Segment>

    <Segment raised={true}>
      <p>
        Open to suggestions/help (which React 16 features to add that I missed, bugs found, overall suggestions/criticisms, and especially help with styling)
      </p>

      <p>
        Someday, the space below will be filled with something cool  
      </p>
    </Segment>

  </Container>
);


export default Home;