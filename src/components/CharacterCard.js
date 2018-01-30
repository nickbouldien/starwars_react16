import React from 'react';
import { Card, Icon, Image, Menu, List, Button, Segment } from 'semantic-ui-react';

const HomeworldLink = ({ character }) => (
  <Button color={'linkedin'} as={'a'} href={`${character.homeworld}`} target={"_blank"} rel={"noopener"} >
    Swapi Link to Home World
  </Button>
);

const CharacterCard = ({ character }) => (
  <Card>
    <Image src={`./images/${character.name}.png`} alt={`CharacterListItem image for ${character.name}`} />
    <Card.Content>
      <Card.Header>{character.name}</Card.Header>
      <Card.Meta>Height: {character.height}, Mass: {character.mass}</Card.Meta>
      <Card.Description>Birth year: {character.birth_year}</Card.Description>
    </Card.Content>
    <Card.Content>
      <HomeworldLink character={character} />
    </Card.Content>
  </Card>
);

export default CharacterCard;
