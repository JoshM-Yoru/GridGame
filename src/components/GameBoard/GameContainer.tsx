import React, { useContext, useEffect, useRef, useState } from 'react'
import Tile from './Tile'
import { terrainNormal, terrainHard } from '../../data/terrain.js'
import { finish, GameContext, start } from '../../context/GameProvider';
import { GameContextState, TileInterface } from '../../interfaces/Game';
import './GameBoard.css'

const GameContainer = () => {

    const { gameBoard, setGameBoard, loading, setLoading, hardDifficulty } = useContext(GameContext) as GameContextState;

    let terrain: TileInterface[];

    hardDifficulty ? terrain = terrainHard : terrain = terrainNormal;

    useEffect(() => {
        if (loading) {
            setGameBoard(
                gameBoard.fill(true).map((_: any, index: any) => {
                    let tile = Math.floor(Math.random() * 20);
                    if (index === start) return < Tile key={index} tilePosition={index} ground={terrain[21].ground} description={terrain[21].description} damage={terrain[21].damage} exhaustion={terrain[21].exhaustion} />
                    if (index === finish) return < Tile key={index} tilePosition={index} ground={terrain[20].ground} description={terrain[20].description} damage={terrain[20].damage} exhaustion={terrain[20].exhaustion} />
                    return < Tile key={index} tilePosition={index} ground={terrain[tile].ground} description={terrain[tile].description} damage={terrain[tile].damage} exhaustion={terrain[tile].exhaustion} />
                })
            )
            setLoading(false);
        }
    }, [gameBoard])

    return (
        <div className="game-container">
            {
                loading ? <h2>GAME LOADING</h2> : gameBoard
            }
        </div>
    )
}

export default GameContainer
