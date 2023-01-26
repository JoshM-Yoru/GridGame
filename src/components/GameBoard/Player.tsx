import React, { useContext, useState } from 'react'
import { GameContext } from '../../context/GameProvider';
import { GameContextState } from '../../interfaces/Game';

interface PlayerProps {
    tilePosition: number;
}

const Player: React.FC<PlayerProps> = ({ tilePosition }) => {

    const { playerPosition, setPlayerPosition } = useContext(GameContext) as GameContextState;

    // if (tilePosition == playerPosition) {

    //     document.onkeydown = function(e) {
    //         if (e.code === 'ArrowUp' || e.code === 'KeyK') {
    //             console.log("Up key is pressed.");
    //             playerPosition - 100 >= 0 && setPlayerPosition(playerPosition - 100);
    //         }
    //         if (e.code === 'ArrowDown' || e.code === 'KeyJ') {
    //             console.log("Down key is pressed.");
    //             playerPosition + 100 < 10000 && setPlayerPosition(playerPosition + 100);
    //         }
    //         if (e.code === 'ArrowLeft' || e.code === 'KeyH') {
    //             console.log("Down key is pressed.");
    //             playerPosition % 100 !== 0 && playerPosition - 1 >= 0 && setPlayerPosition(playerPosition - 1);
    //         }
    //         if (e.code === 'ArrowRight' || e.code === 'KeyL') {
    //             console.log("Down key is pressed.");
    //             (playerPosition + 1) % 100 !== 0 && playerPosition + 1 < 10000 && setPlayerPosition(playerPosition + 1);
    //         }
    //     }
    // }

    {/* <div className='player' style={{ display: `${tilePosition === playerPosition ? 'flex' : 'none'}` }}></div> */ }
    return (
        tilePosition === playerPosition &&
        <div className='player' style={{ display: 'flex' }}></div>
    )
}

export default React.memo(Player)
