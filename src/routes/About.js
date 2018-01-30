import React from 'react';
import { Container, Header, Button, List, Icon } from 'semantic-ui-react';

const About = () => (
  <Container>

    <Header as='h1'>About this project:</Header>
    <Header as='h3'>Tech used:</Header>

    <List relaxed bulleted={true} animated>

      <List.Item>
        <List.Content>
          <List.Description as='a' href="https://github.com/facebook/react">React 16</List.Description>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Description as='a' href="https://webpack.github.io/">Webpack 3</List.Description>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Description as='a' href="https://react.semantic-ui.com/introduction">Semantic UI React</List.Description>
        </List.Content>
      </List.Item>

      {/* <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
          <List.Description as='a'>Updated 10 mins ago</List.Description>
        </List.Content>
      </List.Item> */}

    </List>


    <p>
      Props to <a href="https://swapi.co/">swapi.co <span>(Star Wars API)</span></a> for the awesome (free!) api to mess around with.
      Be sure to suport their project
    </p>

    <p>
      This project inspired by multiple things:  I realized I hadn't looked into React 16 and its new features yet, so wanted to play around with it some.
      Also, wanted to practice with Webpack config, and I remembered that the new <a href="http://www.starwars.com/films/star-wars-episode-viii-the-last-jedi">Star Wars movie</a> was/is coming out soon (hence the theme)
    </p>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/Q0CbN8sfihY"
    frameBorder="0" allowFullScreen></iframe>

    <div>
      On the docket:

        use async/await for axios fetches
        use flow types
        better styling
        good way to send/use styles with portals?
        add some kind of animation(s)

    </div>

    <Container>
      Resources:
      <pre><code>
        // https://reactjs.org/docs/portals.html
        // https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202
        // https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
        // https://medium.com/ecmastack/what-you-need-to-know-about-react-16-a4e216522041
        // https://codepen.io/gaearon/pen/wqvxGa?editors=0010
        // https://blog.sentry.io/2017/09/28/react-16-error-boundaries
        // https://hackernoon.com/error-boundaries-in-react-16-32fb8e185a3
        // https://webpack.js.org/
        // https://www.npmjs.com/package/babel-plugin-transform-react-jsx-source
      </code></pre>
    </Container>

    <Button color='linkedin' as='a' href='https://www.linkedin.com/in/nickbouldien/' target="_blank" >
      <Icon name='linkedin' /> LinkedIn
    </Button>

  </Container>
);

export default About;
