import React from 'react';
import { Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const CharacterListItem = (props) => {
  const name = props.character.name.toLowerCase().replace(" ", "_");
  return (
    <div >
      {/* no images on swapi */}
      <Image src={`/images/${name}.png`} responsive thumbnail alt={`CharacterListItem image for ${props.character.name}`} />
      <ListGroup>
        <ListGroupItem>{props.character.name}</ListGroupItem>
        <ListGroupItem><b>Height:</b> {props.character.height},  <b>Mass:</b> {props.character.mass}</ListGroupItem>
        <ListGroupItem><b>Birth year:</b> {props.character.birth_year}</ListGroupItem>
        <ListGroupItem><b>Swapi Link to Home World:</b> <a href={`${props.character.homeworld}`}>{props.character.homeworld}</a></ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default CharacterListItem;
