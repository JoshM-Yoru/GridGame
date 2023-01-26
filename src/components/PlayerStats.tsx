import React, { useContext, useEffect } from 'react'
import { finish, GameContext } from '../context/GameProvider'
import { GameContextState } from '../interfaces/Game'
import './PlayerStats.css'

const PlayerStats = () => {

    const { health, movement, playerPosition, gameWon } = useContext(GameContext) as GameContextState;

    if (gameWon) return <h2>You Win!</h2>

    return (
        <div className='stats-container'>
            {
                health <= 0 || movement <= 0 ?
                    <h2>Game Over!</h2> :
                    <>
                        <h2>Health: {health}</h2>
                        <h2>Movement Left: {movement}</h2>
                    </>
            }
        </div>
    )
}

export default PlayerStats
