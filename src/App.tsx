import './App.css'
import GameContainer from './components/GameBoard/GameContainer'
import GameProvider from './context/GameProvider'

function App() {

    return (
        <div className="App">
            <GameProvider>
                <GameContainer />
            </GameProvider>
        </div>
    )
}

export default App
