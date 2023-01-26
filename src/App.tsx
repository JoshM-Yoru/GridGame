import { useContext } from 'react'
import './App.css'
import GameContainer from './components/GameBoard/GameContainer'
import Instructions from './components/Instructions'
import PlayerStats from './components/PlayerStats'
import { finish, GameContext, start } from './context/GameProvider'
import { GameContextState } from './interfaces/Game'

function App() {

    const { loading } = useContext(GameContext) as GameContextState;

    return (
        <div className="App">
            <div className='info-wrapper'>
                <Instructions />
                <PlayerStats />
                <p>Starting Position: {start} | Finishing Positon: {finish}</p>
            </div>
            <div className='game-wrapper' style={{ width: '90vh', height: '90vh', overflow: 'scroll' }}>
                <GameContainer />
            </div>
        </div>
    )
}

export default App
