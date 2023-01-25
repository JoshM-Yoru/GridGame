import React, { useState } from 'react'
import Tile from './Tile'
import { terrain } from '../../data/terrain.js'

const GameContainer = () => {

    const [health, setHealth] = useState<number>(100);
    const [movement, setMovement] = useState<number>(150);
    const [position, setPosition] = useState<number>(99);

    document.onkeydown = function(e) {
        if (e.code === 'ArrowUp' || e.code === 'KeyK') {
            console.log("Up key is pressed.");
            position - 10 >= 0 && setPosition(position - 10);
        }
        if (e.code === 'ArrowDown' || e.code === 'KeyJ') {
            console.log("Down key is pressed.");
            position + 10 <= 100 && setPosition(position + 10);
        }
        if (e.code === 'ArrowLeft' || e.code === 'KeyH') {
            console.log("Down key is pressed.");
            (position - 1) % 10 !== 9 && position - 1 >= 0 && setPosition(position - 1);
        }
        if (e.code === 'ArrowRight' || e.code === 'KeyL') {
            console.log("Down key is pressed.");
            (position + 1) % 10 !== 0 && position + 1 < 100 && setPosition(position + 1);
            // if (position + 1 % 4 === 1) {
            //     setPosition(position)
            // } else {
            //     setPosition(position + 1)
            // }

        }
        //     switch (event.code) {
        //             case 37:
        //                 console.log("Left key is pressed.");
        //                 break;
        //             case 'ArrowUp':
        //                 console.log("Up key is pressed.");
        //                 position - 1 >= 0 && setPosition(position - 1);
        //                 break;
        //             case 39:
        //                 console.log("Right key is pressed.");
        //                 break;
        //             case 'ArrowDown':
        //                 console.log("Down key is pressed.");
        //                 position + 1 <= 15 && setPosition(position + 1);
        //                 break;
        //         }
    }
    return (
        <div className="game-container" style={{ width: '1100px', height: '1100px', display: 'flex', flexWrap: 'wrap' }}>
            {
                Array(100).fill(true).map((_, index) => {
                    let tile = Math.floor(Math.random() * 4);
                    return < Tile key={index} position={index} ground={terrain[tile].ground} description={terrain[tile].description} damage={terrain[tile].damage} exhaustion={terrain[tile].exhaustion} active={position === index} />
                })
            }
        </div>
    )
}

export default GameContainer
