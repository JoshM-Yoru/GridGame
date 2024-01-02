import React, { useContext, useEffect, useRef } from 'react'
import { GameContext, tileArray } from '../../context/GameProvider';
import { GameContextState } from '../../interfaces/Game';

interface TileProps {
    ground: string;
    description: string;
    damage: number;
    exhaustion: number;
    tilePosition: number;
}

const Tile: React.FC<TileProps> = ({ ground, tilePosition }) => {

    const { numbers, playerPosition, setPlayerPosition, health, setHealth, movement, setMovement } = useContext(GameContext) as GameContextState;

    const playerRef = useRef<HTMLDivElement>(null);


    const centerPlayer = () => {
        playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }

    document.onkeydown = function(e) {
        if (e.code === 'ArrowUp' || e.code === 'KeyK' && playerPosition - 100 >= 0) {
            setHealth(health - tileArray[playerPosition - 100].damage);
            setMovement(movement - tileArray[playerPosition - 100].exhaustion);
            setPlayerPosition(playerPosition - 100);
        }
        if (e.code === 'ArrowDown' || e.code === 'KeyJ' && playerPosition + 100 < 10000) {
            setHealth(health - tileArray[playerPosition + 100].damage);
            setMovement(movement - tileArray[playerPosition + 100].exhaustion);
            setPlayerPosition(playerPosition + 100);
        }
        if (e.code === 'ArrowLeft' || e.code === 'KeyH' && playerPosition % 100 !== 0 && playerPosition - 1 >= 0) {
            setHealth(health - tileArray[playerPosition - 1].damage);
            setMovement(movement - tileArray[playerPosition - 1].exhaustion);
            setPlayerPosition(playerPosition - 1);
        }
        if (e.code === 'ArrowRight' || e.code === 'KeyL' && (playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000) {
            setHealth(health - tileArray[playerPosition + 1].damage);
            setMovement(movement - tileArray[playerPosition + 1].exhaustion);
            setPlayerPosition(playerPosition + 1);
        }
    }

    centerPlayer();


    return (
        <div onClick={centerPlayer} className='tile-container' style={{ backgroundImage: `url(${ground})` }}>
            {
                numbers && <p style={{ fontSize: '8px', position: 'absolute' }}>{tilePosition}</p>
            }
            {
                tilePosition === playerPosition &&
                <div className='player' ref={playerRef} style={{ display: 'flex' }}></div>
            }
        </div>
    )
}

export default Tile
