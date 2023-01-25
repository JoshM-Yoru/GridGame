import React, { useContext } from 'react'
import { GameContext } from '../../context/GameProvider';
import { GameContextState } from '../../interfaces/Game';

interface TileProps {
    ground: string;
    description: string;
    damage: number;
    exhaustion: number;
    tilePosition: number;
}

const Tile: React.FC<TileProps> = ({ ground, description, damage, exhaustion, tilePosition }) => {

    const { playerPosition, setPlayerPosition } = useContext(GameContext) as GameContextState;

    document.onkeydown = function(e) {
        if (e.code === 'ArrowUp' || e.code === 'KeyK') {
            console.log("Up key is pressed.");
            playerPosition - 100 >= 0 && setPlayerPosition(playerPosition - 100);
        }
        if (e.code === 'ArrowDown' || e.code === 'KeyJ') {
            console.log("Down key is pressed.");
            playerPosition + 100 < 10000 && setPlayerPosition(playerPosition + 100);
        }
        if (e.code === 'ArrowLeft' || e.code === 'KeyH') {
            console.log("Down key is pressed.");
            (playerPosition - 1) % 10 !== 9 && playerPosition - 1 >= 0 && setPlayerPosition(playerPosition - 1);
        }
        if (e.code === 'ArrowRight' || e.code === 'KeyL') {
            console.log("Down key is pressed.");
            (playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000 && setPlayerPosition(playerPosition + 1);
        }
    }

    return (
        <div style={{ backgroundImage: `url(${ground})`, backgroundSize: 'cover', position: 'relative', width: 'fit-content', height: '20px' }}>
            {tilePosition}
            {
                playerPosition === tilePosition &&
                <div style={{ margin: 'auto', padding: '0', zIndex: '10', background: 'yellow', height: '10px', width: '10px', borderRadius: '40px' }}></div>
            }
        </div>
    )
}

export default Tile
