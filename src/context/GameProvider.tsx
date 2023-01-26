import React, { useState } from "react";
import { GameContextState, Tile } from "../interfaces/Game";

export const GameContext = React.createContext<GameContextState | null>(null);

interface ProviderProps {
    children: React.ReactNode;
}

export const start: number = Math.floor(Math.random() * 99);
console.log(start)
export const finish: number = Math.floor(Math.random() * (10000 - 9900) + 9900);
console.log(finish)

const GameProvider: React.FC<ProviderProps> = ({ children }) => {
    const [health, setHealth] = useState<number>(800);
    const [movement, setMovement] = useState<number>(150);
    const [playerPosition, setPlayerPosition] = useState<number>(start);
    const [gameBoard, setGameBoard] = useState(Array(10000));
    const [loading, setLoading] = useState<boolean>(true);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [gameWon, setGameWon] = useState<boolean>(false);

    if (health <= 0) setGameOver(true);

    if (playerPosition === finish) setGameWon(true);

    return (
        <GameContext.Provider
            value={{
                gameOver,
                setGameOver,
                gameWon,
                setGameWon,
                loading,
                setLoading,
                health,
                setHealth,
                movement,
                setMovement,
                playerPosition,
                setPlayerPosition,
                gameBoard,
                setGameBoard,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;
