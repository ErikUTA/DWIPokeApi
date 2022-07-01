import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const Pokemon = (props) => {
    const { pokemon } = props;
    return (
        <div className="pokemon-card">
            <div className="pokemon-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card">
                <div className="card-info">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div>
                    <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;