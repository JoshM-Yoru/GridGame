export interface TileInterface {
    ground: string;
    description: string;
    damage: number;
    exhaustion: number;
    tilePosition: number;
}

export interface Player {
    currentPosition: number;
    health: number;
    movement: number;
}

export interface GameContextState {
    health: number;
    setHealth: (n: number) => void;
    movement: number;
    setMovement: (n: number) => void;
    playerPosition: number;
    setPlayerPosition: (n: number) => void;
    loading: boolean;
    setLoading: (b: boolean) => void;
    numbers: boolean;
    setNumbers: (b: boolean) => void;
    startGame: boolean;
    setStartGame: (b: boolean) => void;
    hardDifficulty: boolean;
    setHardDifficulty: (b: boolean) => void;
    difficultySelected: boolean;
    setDifficultySelected: (b: boolean) => void;
}
