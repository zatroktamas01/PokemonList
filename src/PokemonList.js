import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './css/pokemon.css';

function PokemonList() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(data => {
                setPokemon(data.results);
            })
    }, [])

    return (
        <>
            <h2 className="pokemon-title">Pokemon List</h2>
            <ol className="pokemon-list">
                {pokemon.map(pokemons => {
                    let nameSlpit = pokemons.url.split("/");
                    let nameID = nameSlpit[nameSlpit.length - 2];
                    return (
                        <li key={nameID} className="pokemon-item">
                            <Link to={"/pokemon-details/" + nameID}>{pokemons.name}</Link>
                        </li>
                    );
                })}
            </ol>
        </>
    );
}

export default PokemonList;
