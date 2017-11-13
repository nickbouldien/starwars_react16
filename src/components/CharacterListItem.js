import React from 'react';

const CharacterListItem = (props) => (
  <div >  {/* don't forget the key!!! it will yell at you */}
  <ul>
    <li>{props.character.name}</li>
    <li>Height: {props.character.height},  Mass: {props.character.mass}</li>
    <li>Birth year: {props.character.birth_year}</li>
    <li>Swapi Link to Home World: <a href={`${props.character.homeworld}`}>{props.character.homeworld}</a></li>
  </ul>
  {/* <img   /> */}
</div>
);

export default CharacterListItem;
