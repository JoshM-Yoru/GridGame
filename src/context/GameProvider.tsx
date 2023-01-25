import React, { useState } from 'react'
import { GameContextState, Tile } from '../interfaces/Game';

export const GameContext = React.createContext<GameContextState | null>(null);

interface ProviderProps {
    children: React.ReactNode;
}

const GameProvider: React.FC<ProviderProps> = ({ children }) => {

    const [health, setHealth] = useState<number>(100);
    const [movement, setMovement] = useState<number>(150);
    const [playerPosition, setPlayerPosition] = useState<number>(95);

    return (
        <GameContext.Provider value={{ playerPosition, setPlayerPosition }}>{children}</GameContext.Provider>
    )
}

export default GameProvider
