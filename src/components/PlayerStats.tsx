import { useContext } from 'react'
import { finish, GameContext, start } from '../context/GameProvider'
import { GameContextState } from '../interfaces/Game'
import './PlayerStats.css'

const PlayerStats = () => {

    const { health, movement, numbers, setNumbers, playerPosition } = useContext(GameContext) as GameContextState;

    return (
        <div className='stats-container'>
            {
                health <= 0 || movement <= 0 || playerPosition === finish ?
                    <>
                        <h2>Want to play again?</h2>
                        <button onClick={() => location.reload()}>Play Again</button>
                    </>
                    :
                    <>
                        <div className="points">
                            <h2>Health: {health}</h2>
                            <h2>Movement Left: {movement}</h2>
                        </div>
                        <div className='points'>
                            <button onClick={() => setNumbers(!numbers)}>Toggle Numbers</button>
                            {
                                numbers && <p>Start: {start} | Current: {playerPosition} | Finish: {finish}</p>
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default PlayerStats
