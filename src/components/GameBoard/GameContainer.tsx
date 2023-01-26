import React, { useContext, useEffect, useState } from 'react'
import Tile from './Tile'
import { terrain } from '../../data/terrain.js'
import { finish, GameContext, start } from '../../context/GameProvider';
import { GameContextState } from '../../interfaces/Game';
import './GameBoard.css'

const GameContainer = () => {

    const { gameOver, gameWon, gameBoard, setGameBoard, loading, setLoading } = useContext(GameContext) as GameContextState;

    useEffect(() => {
        if (loading) {
            setGameBoard(
                gameBoard.fill(true).map((_: any, index: any) => {
                    let tile = Math.floor(Math.random() * 14);
                    if (index === start) return < Tile key={index} tilePosition={index} ground={terrain[15].ground} description={terrain[13].description} damage={terrain[13].damage} exhaustion={terrain[13].exhaustion} />
                    if (index === finish) return < Tile key={index} tilePosition={index} ground={terrain[14].ground} description={terrain[12].description} damage={terrain[12].damage} exhaustion={terrain[12].exhaustion} />
                    return < Tile key={index} tilePosition={index} ground={terrain[tile].ground} description={terrain[tile].description} damage={terrain[tile].damage} exhaustion={terrain[tile].exhaustion} />
                })
            )
            setLoading(false);
        }
    }, [gameBoard])

    if (gameOver) {
        return (
            <div className="game-container">
                <h2>Game Over</h2>
            </div>
        )
    }

    if (gameWon) {
        return (
            <div className="game-container">
                <h2>You Win</h2>
            </div>
        )
    }


    return (
        <div className="game-container">
            {
                loading ? <h2>LOADING</h2> : gameBoard
            }
        </div>
    )
}

export default GameContainer
