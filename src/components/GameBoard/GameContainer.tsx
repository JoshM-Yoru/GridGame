import { useContext, useEffect } from "react";
import Tile from "./Tile";
import { terrainNormal, terrainHard } from "../../data/terrain.js";
import { finish, GameContext, start, tileArray } from "../../context/GameProvider";
import { GameContextState, TileInterface } from "../../interfaces/Game";
import "./GameBoard.css";


const GameContainer = () => {
    const { loading, setLoading, hardDifficulty, difficultySelected } =
        useContext(GameContext) as GameContextState;

    let terrain: TileInterface[];

    hardDifficulty ? (terrain = terrainHard) : (terrain = terrainNormal);

    useEffect(() => {
        if (difficultySelected) {
            let index: number = 0
            while (index < 9999) {
                let tile = Math.floor(Math.random() * 20);
                if (
                    index === start - 1 ||
                    index === start + 1 ||
                    index === start + 99 ||
                    index === start + 100 ||
                    index === start + 101
                ) {
                    tileArray[index] = terrain[0];
                }
                if (index === start) {
                    tileArray[index] = terrain[21];
                }
                if (index === finish) {
                    tileArray[index] = terrain[20];
                }
                tileArray[index] = terrain[tile];
                index++
            };
            setLoading(false);
        }
    }, [difficultySelected]);


    return (
        <div className="game-container">
            {loading ?
                <h2>GAME LOADING</h2>
                :
                tileArray.map((tile: any, index: number) => {
                    return (
                        <Tile
                            key={index}
                            tilePosition={index}
                            ground={tile.ground}
                            description={tile.description}
                            damage={tile.damage}
                            exhaustion={tile.exhaustion}
                        />
                    );
                })
            }
        </div>
    );
};

export default GameContainer;
