import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import CharacterCard from '../src/components/CharacterCard';
// import Frag from '../src/routes/Frag';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


const characterProps = {
  character: {
    name: 'anakin',
    height: '17',
    birth_year: '1980',
    homeworld: '#',
  }
}
storiesOf('CharacterCard', module)
.add('render', () => <CharacterCard {...characterProps} />)
