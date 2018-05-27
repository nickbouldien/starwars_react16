import React from 'react';
import { Container, Divider, Header, Button, List, Icon } from 'semantic-ui-react';

const About = () => (
  <Container>

    <Header as='h1'>About this project:</Header>
    <Header as='h3'>Tech used:</Header>

    <List relaxed bulleted={true} animated>

      <List.Item>
        <List.Content>
          <List.Description as='a' href="https://github.com/facebook/react" target="_blank" rel='noopener noreferrer' >React 16</List.Description>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Description as='a' href="https://webpack.github.io/" target="_blank" rel='noopener noreferrer' >Webpack 3</List.Description>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Description as='a' href="https://react.semantic-ui.com/introduction" target="_blank" rel='noopener noreferrer' >Semantic UI React</List.Description>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Description as='a' href="https://www.netlify.com/" target="_blank" rel='noopener noreferrer' >Netlify</List.Description>
        </List.Content>
      </List.Item>

    </List>

    <p>
      Props to <a href="https://swapi.co/" target="_blank" rel='noopener noreferrer'>swapi.co <span>(Star Wars API)</span></a> for the awesome (free!) api to mess around with.
      Be sure to suport their project
    </p>

    <p>
      This project inspired by multiple things:  I realized I hadn't looked into React 16 and its new features yet, so wanted to play around with it some.
      Also, wanted to practice with Webpack config, and I remembered that the new <a href="http://www.starwars.com/films/star-wars-episode-viii-the-last-jedi">Star Wars movie</a> was/is coming out soon (hence the theme)
      EDIT: this was started in November of 2017
    </p>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/Q0CbN8sfihY"
    frameBorder="0" allowFullScreen></iframe>

    <Divider />

    <div>
    
      <Header as="h3">On the docket:</Header>

      <List>
        <List.Item>
          <List.Content>
            testing with jest/enzyme
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            16.4 pointer events
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            use the (new) context api
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            use render props
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            use new ref Apis
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            use async/await for axios fetches
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
          use flow types
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            better styling
          </List.Content>
        </List.Item>                

        <List.Item>
          <List.Content>
            good way to send/use styles with portals?
          </List.Content>
        </List.Item>                

        <List.Item>
          <List.Content>
            add some kind of animation(s)
          </List.Content>
        </List.Item>                
        
      </List>
    </div>

    <Divider />

    <Container>
      <Header as="h3">Resources/Links:</Header>

      <List>
        <List.Item>
          <List.Content>
            <List.Description
              as='a'
              href="https://reactjs.org/docs/portals.html"
              target="_blank"
              rel='noopener noreferrer'>
              react portals (reactjs.org)
            </List.Description>
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            <List.Description
              as='a'
              href="https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202"
              target="_blank"
              rel='noopener noreferrer'>
                react portals (hackernoon)
              </List.Description>          
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            <List.Description
              as='a'
              href="https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html"
              target="_blank"
              rel='noopener noreferrer'>
                error handling
              </List.Description>          
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            <List.Description
              as='a'
              href="https://medium.com/ecmastack/what-you-need-to-know-about-react-16-a4e216522041"
              target="_blank"
              rel='noopener noreferrer'>
                Medium blog post about React 16 by Alex Bachuk
              </List.Description>          
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            <List.Description
              as='a'
              href="https://codepen.io/gaearon/pen/wqvxGa?editors=0010"
              target="_blank"
              rel='noopener noreferrer'>
                Error Boundary code pen by Dan Abramov
              </List.Description>          
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            <List.Description
              as='a'
              href="https://blog.sentry.io/2017/09/28/react-16-error-boundaries"
              target="_blank"
              rel='noopener noreferrer'>
                Error Boundary post by Max Bittker
              </List.Description>          
          </List.Content>
        </List.Item>


        <List.Item>
          <List.Content>
            <List.Description
              as='a'
              href="https://hackernoon.com/error-boundaries-in-react-16-32fb8e185a3"
              target="_blank"
              rel='noopener noreferrer'>
                Error Boundary post by Vivek Nayyar
              </List.Description>          
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Content>
            <List.Description
              as='a'
              href="https://webpack.js.org/"
              target="_blank"
              rel='noopener noreferrer'>
                webpack docs
              </List.Description>          
          </List.Content>
        </List.Item>

      </List>

    </Container>

    <Button color='linkedin' as='a' href='https://www.linkedin.com/in/nickbouldien/' target="_blank" >
      <Icon name='linkedin' /> LinkedIn
    </Button>

    <Button color='github' as='a' href='https://github.com/nickbouldien' target="_blank" >
      <Icon name='github' /> Github
    </Button>

  </Container>
);

export default About;