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
    playerPosition: number;
    setPlayerPosition: (n: number) => void;
}
