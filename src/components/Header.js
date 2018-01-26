import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, List, Button, Segment } from 'semantic-ui-react';

const Header = () => (
  <Menu inverted>
    <Menu.Item
      header
      name={'React 16 SW'}
      as={Link}
      to={"/"}
    />
    <Menu.Item
      name={'about'}
      // active={activeItem === 'about'}
      as={Link}
      to={"/about"}
    />
    <Menu.Item
      floated={"right"}
      name={'Github link'} // could add github icon
      as={'a'}
      href={"https://www.github.com/nickbouldien" } // TODO: make link to actual repo
    />
  </Menu>
);

export default Header;
