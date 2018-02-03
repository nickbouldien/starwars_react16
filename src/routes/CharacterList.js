import React from 'react';
import CharacterCard from '../components/CharacterCard';

const CharacterList = ({ data }) => {
    if (!data) { return null; }
    return (
        data.map((character, ind) => (
            <CharacterCard
               character={character}
               key={ind}
            />
        ))
    );
}

export default CharacterList;