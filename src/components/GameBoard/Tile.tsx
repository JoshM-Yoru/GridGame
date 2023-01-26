import React, { useContext, useEffect } from 'react'
import { GameContext } from '../../context/GameProvider';
import { GameContextState } from '../../interfaces/Game';
import Player from './Player';

interface TileProps {
    ground: string;
    description: string;
    damage: number;
    exhaustion: number;
    tilePosition: number;
}

const Tile: React.FC<TileProps> = ({ ground, description, damage, exhaustion, tilePosition }) => {

    const { gameBoard, playerPosition, setPlayerPosition, health, setHealth, movement, setMovement } = useContext(GameContext) as GameContextState;

    if (tilePosition == playerPosition) {

        document.onkeydown = function(e) {
            if (e.code === 'ArrowUp' || e.code === 'KeyK') {
                console.log("Up key is pressed.");
                playerPosition - 100 >= 0 && setPlayerPosition(playerPosition - 100);
                playerPosition - 100 >= 0 && setHealth(health - gameBoard[playerPosition - 100].props.damage);
                playerPosition - 100 >= 0 && setMovement(movement - gameBoard[playerPosition - 100].props.exhaustion);
            }
            if (e.code === 'ArrowDown' || e.code === 'KeyJ') {
                console.log("Down key is pressed.");
                playerPosition + 100 < 10000 && setPlayerPosition(playerPosition + 100);
                playerPosition + 100 < 10000 && setHealth(health - gameBoard[playerPosition + 100].props.damage);
                playerPosition + 100 < 10000 && setMovement(movement - gameBoard[playerPosition + 100].props.exhaustion);
            }
            if (e.code === 'ArrowLeft' || e.code === 'KeyH') {
                console.log("Down key is pressed.");
                playerPosition % 100 !== 0 && playerPosition - 1 >= 0 && setPlayerPosition(playerPosition - 1);
                playerPosition % 100 !== 0 && setHealth(health - gameBoard[playerPosition - 1].props.damage);
                playerPosition % 100 !== 0 && setMovement(movement - gameBoard[playerPosition - 1].props.exhaustion);
            }
            if (e.code === 'ArrowRight' || e.code === 'KeyL') {
                console.log("Down key is pressed.");
                (playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000 && setPlayerPosition(playerPosition + 1);
                (playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000 && setHealth(health - gameBoard[playerPosition + 1].props.damage);
                (playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000 && setMovement(movement - gameBoard[playerPosition + 1].props.exhaustion);
            }
        }
    }

    console.log(playerPosition)

    return (
        <div className='tile-container' style={{ backgroundImage: `url(${ground})` }}>
            <p style={{ fontSize: '8px', position: 'absolute' }}>{tilePosition}</p>
            <Player tilePosition={tilePosition} />
        </div>
    )
}

export default Tile