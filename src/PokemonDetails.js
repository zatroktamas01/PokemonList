import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import './css/pokemon.css'; 

function PokemonDetails(){
    const {id} = useParams();
    const [pokemondetails, setPokemonDetails] = useState({
        sprites: {
            front_default: "https://i.gifer.com/ZKZg.gif"
        }
    });

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(response => response.json())
        .then(data => {
            setPokemonDetails(data);
        })
    }, [id]);

    return(
        <div className="pokemon-details">
            <b>
                <span className="pokemon-name">ID: {pokemondetails.id} 👉 {pokemondetails.name}</span>
                <br /> Height: {pokemondetails.height} 📏
                <br /> <img src={pokemondetails.sprites.front_default} alt="Pokemon" className="pokemon-image"/>
            </b>
        </div>
    );
}

export default PokemonDetails;

