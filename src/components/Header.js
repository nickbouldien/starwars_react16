import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, List, Button, Segment, Icon } from 'semantic-ui-react';

const Header = () => (
  <Menu inverted>
    <Menu.Item
      header
      name={'React 16 SW'}
      as={Link}
      to={"/"}
    />
    <Menu.Menu position={"right"}>
      <Menu.Item
        name={'about'}
        // active={activeItem === 'about'}
        as={Link}
        to={"/about"}
      />
      <Menu.Item
        name={'Github link'}
        as={'a'}
        href={"https://www.github.com/nickbouldien" } // TODO: make link to actual repo
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon name="github" size="large" />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;

