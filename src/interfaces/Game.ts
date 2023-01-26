export interface Tile {
    ground: string;
    description: string;
    damage: number;
    exhaustion: number;
    position: number;
    active: boolean;
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
    gameBoard: any;
    setGameBoard: (a: any) => void;
    loading: boolean;
    setLoading: (b: boolean) => void;
    numbers: boolean;
    setNumbers: (b: boolean) => void;
    startGame: boolean;
    setStartGame: (b: boolean) => void;
}
