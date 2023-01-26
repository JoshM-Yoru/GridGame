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

    if (tilePosition == playerPosition) {

        document.onkeydown = function(e) {
            if (e.code === 'ArrowUp' || e.code === 'KeyK') {
                playerPosition - 100 >= 0 && setPlayerPosition(playerPosition - 100);
                playerPosition - 100 >= 0 && setHealth(health - gameBoard[playerPosition - 100].props.damage);
                playerPosition - 100 >= 0 && setMovement(movement - gameBoard[playerPosition - 100].props.exhaustion);
                playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
            if (e.code === 'ArrowDown' || e.code === 'KeyJ') {
                playerPosition + 100 < 10000 && setPlayerPosition(playerPosition + 100);
                playerPosition + 100 < 10000 && setHealth(health - gameBoard[playerPosition + 100].props.damage);
                playerPosition + 100 < 10000 && setMovement(movement - gameBoard[playerPosition + 100].props.exhaustion);
                playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
            if (e.code === 'ArrowLeft' || e.code === 'KeyH') {
                playerPosition % 100 !== 0 && playerPosition - 1 >= 0 && setPlayerPosition(playerPosition - 1);
                playerPosition % 100 !== 0 && setHealth(health - gameBoard[playerPosition - 1].props.damage);
                playerPosition % 100 !== 0 && setMovement(movement - gameBoard[playerPosition - 1].props.exhaustion);
                playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
            if (e.code === 'ArrowRight' || e.code === 'KeyL') {
                (playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000 && setPlayerPosition(playerPosition + 1);
                (playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000 && setHealth(health - gameBoard[playerPosition + 1].props.damage);
                (playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000 && setMovement(movement - gameBoard[playerPosition + 1].props.exhaustion);
                playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
        }
    }

    const centerPlayer = () => {
        if (playerRef.current) {
            playerRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    }

    useEffect(() => {
        centerPlayer();
    }, [])

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
