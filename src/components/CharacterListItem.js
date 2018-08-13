import React from 'react';
import { Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const CharacterListItem = ({ character }) => {
  const name = character.name.toLowerCase().replace(" ", "_");
  return (
    <div >
      {/* no images on swapi */}
      <Image src={`/images/${name}.png`} responsive thumbnail alt={`CharacterListItem image for ${character.name}`} />
      <ListGroup>
        <ListGroupItem>{character.name}</ListGroupItem>
        <ListGroupItem><b>Height:</b> {character.height}, <b>Mass:</b> {character.mass}</ListGroupItem>
        <ListGroupItem><b>Birth year:</b> {character.birth_year}</ListGroupItem>
        <ListGroupItem><b>Swapi Link to Home World:</b> <a href={`${character.homeworld}`}>{character.homeworld}</a></ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default CharacterListItem;
