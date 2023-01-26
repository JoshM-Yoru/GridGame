import { useContext } from 'react'
import './App.css'
import GameContainer from './components/GameBoard/GameContainer'
import Instructions from './components/Instructions'
import PlayerStats from './components/PlayerStats'
import { finish, GameContext, start } from './context/GameProvider'
import { GameContextState } from './interfaces/Game'

function App() {
    const { playerPosition, health, movement } = useContext(GameContext) as GameContextState;
    const test = () => {
        if (health <= 0 || movement <= 0) {
            return <h2 className='game-status'>Game Over</h2>

        } else if (playerPosition === finish) {
            return <h2 className='game-status'>You Win</h2>
        } else {
            return <GameContainer />
        }
    }
    return (
        <div className="App">
            <div className='info-wrapper'>
                <Instructions />
                <PlayerStats />
            </div>
            <div className='game-wrapper'>
                {
                    test()
                }
            </div>
        </div>
    )
}

export default App
