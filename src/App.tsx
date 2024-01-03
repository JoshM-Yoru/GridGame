import { useContext } from 'react'
import './App.css'
import GameContainer from './components/GameBoard/GameContainer'
import Instructions from './components/Instructions'
import PlayerStats from './components/PlayerStats'
import { finish, GameContext } from './context/GameProvider'
import { GameContextState } from './interfaces/Game'

function App() {

    const { playerPosition, health, movement, startGame, setStartGame, setHardDifficulty, difficultySelected, setDifficultySelected } = useContext(GameContext) as GameContextState;


    const gameStatus = () => {
        if (health <= 0 || movement <= 0) {
            return <h2 className='game-status'>Game Over</h2>

        } else if (playerPosition === finish) {
            return <h2 className='game-status'>You Win</h2>
        } else {
            return <GameContainer />
        }
    }

    const difficultySelect = () => {
        if (!startGame && !difficultySelected) {
            return (
                <div className="difficulty">
                    <button onClick={() => { setHardDifficulty(false); setDifficultySelected(true) }}>Normal Difficulty</button>
                    <button onClick={() => { setHardDifficulty(true); setDifficultySelected(true) }}> Hard Difficulty</button >
                </div>
            )
        } else if (!startGame && difficultySelected) {
            return (
                <>
                    <button onClick={() => setStartGame(true)}>Start Game</button>
                </>
            )
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
                    startGame ? gameStatus() : difficultySelect()
                }
            </div>
        </div>
    )
}

export default App
