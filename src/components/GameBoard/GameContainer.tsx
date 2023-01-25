import React, { useContext, useState } from 'react'
import Tile from './Tile'
import { terrain } from '../../data/terrain.js'
import { GameContext } from '../../context/GameProvider';
import { GameContextState } from '../../interfaces/Game';

const GameContainer = () => {

    return (
        <div className="game-container" style={{ padding: '0', width: '9000px', height: '2000px', display: 'flex', flexWrap: 'wrap' }}>
            {
                Array(10000).fill(true).map((_, index) => {
                    let tile = Math.floor(Math.random() * 12);
                    return < Tile key={index} tilePosition={index} ground={terrain[tile].ground} description={terrain[tile].description} damage={terrain[tile].damage} exhaustion={terrain[tile].exhaustion} />
                })
            }
        </div>
    )
}

export default GameContainer
