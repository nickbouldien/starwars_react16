import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

const HomeworldLink = ({ character }) => (
  <Button
    color={'linkedin'}
    as={'a'}
    href={`${character.homeworld}`}
    target={"_blank"}
    rel={"noopener"}
  >
    Swapi Link to Home World
  </Button>
);

// TODO: can make everything lowercase and do a match/replace on space => underscore
const formatNameForImage = (name = "chewie") => {
  switch (name) {
    case "Lhuorwo Sorroohraanorworc":
    case "Luke Skywalker":
      return "luke_skywalker";
      break;
    case "C-3PO":
      return "c-3po";
      break;
    case "R2-D2":
      return "r2-d2";
      break;
    case "Drarcaoac Vrawaworc":
    case "Darth Vader":
      return "darth_vader";
      break;
    default:
      return "chewie";
  }
}

const CharacterCard = ({ character }) => (
  <Card>
    <Image src={`./images/${formatNameForImage(character.name)}.png`} alt={`CharacterListItem image for ${character.name}`} />
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
