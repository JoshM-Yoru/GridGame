import React, { useContext, useEffect, useRef } from 'react'
import { GameContext, start } from '../../context/GameProvider';
import { GameContextState } from '../../interfaces/Game';

interface TileProps {
    ground: string;
    description: string;
    damage: number;
    exhaustion: number;
    tilePosition: number;
}

const Tile: React.FC<TileProps> = ({ ground, description, damage, exhaustion, tilePosition }) => {

    const { numbers, gameBoard, playerPosition, setPlayerPosition, health, setHealth, movement, setMovement } = useContext(GameContext) as GameContextState;

    const playerRef = useRef<HTMLDivElement>(null);


    const centerPlayer = () => {
        playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }

    useEffect(() => {
        if (tilePosition == playerPosition) {

            document.onkeydown = function(e) {
                if (playerPosition - 100 >= 0 && e.code === 'ArrowUp' || e.code === 'KeyK') {
                    setPlayerPosition(playerPosition - 100);
                    setHealth(health - gameBoard[playerPosition - 100].props.damage);
                    setMovement(movement - gameBoard[playerPosition - 100].props.exhaustion);
                }
                if (playerPosition + 100 < 10000 && e.code === 'ArrowDown' || e.code === 'KeyJ') {
                    setPlayerPosition(playerPosition + 100);
                    setHealth(health - gameBoard[playerPosition + 100].props.damage);
                    setMovement(movement - gameBoard[playerPosition + 100].props.exhaustion);
                }
                if (playerPosition % 100 !== 0 && playerPosition - 1 >= 0 && e.code === 'ArrowLeft' || e.code === 'KeyH') {
                    setPlayerPosition(playerPosition - 1);
                    setHealth(health - gameBoard[playerPosition - 1].props.damage);
                    setMovement(movement - gameBoard[playerPosition - 1].props.exhaustion);
                }
                if ((playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000 && e.code === 'ArrowRight' || e.code === 'KeyL') {
                    setPlayerPosition(playerPosition + 1);
                    setHealth(health - gameBoard[playerPosition + 1].props.damage);
                    setMovement(movement - gameBoard[playerPosition + 1].props.exhaustion);
                }
            }
        }

        centerPlayer();

    }, [playerPosition, movement, health])

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
