import React from 'react';
import CharacterCard from '../components/CharacterCard';

const CharacterList = ({ data }) => {
    console.log('characterList data: ', data);
    if (!data) { return null; }
    return (
        // returning array
        data.map((character, ind) => (
            <CharacterCard
               character={character}
               key={ind}
            />
        ))
    );
}

export default CharacterList;