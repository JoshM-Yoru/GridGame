import React, { useState } from "react";
import { GameContextState } from "../interfaces/Game";

export const GameContext = React.createContext<GameContextState | null>(null);

interface ProviderProps {
    children: React.ReactNode;
}

export const start: number = Math.floor(Math.random() * (80 - 20) + 15);
export const finish: number = Math.floor(Math.random() * (9980 - 9920) + 9920);

const GameProvider: React.FC<ProviderProps> = ({ children }) => {
    const [health, setHealth] = useState<number>(100);
    const [movement, setMovement] = useState<number>(150);
    const [playerPosition, setPlayerPosition] = useState<number>(start);
    const [gameBoard, setGameBoard] = useState(Array(10000));
    const [loading, setLoading] = useState<boolean>(true);
    const [numbers, setNumbers] = useState<boolean>(false);
    const [startGame, setStartGame] = useState<boolean>(false);
    const [hardDifficulty, setHardDifficulty] = useState<boolean>(false);

    return (
        <GameContext.Provider
            value={{
                hardDifficulty,
                setHardDifficulty,
                startGame,
                setStartGame,
                numbers,
                setNumbers,
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
