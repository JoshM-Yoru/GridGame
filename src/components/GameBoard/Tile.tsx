import React from 'react'

interface TileProps {
    ground: string;
    description: string;
    damage: number;
    exhaustion: number;
    active: boolean;
    position: number;
}

const Tile: React.FC<TileProps> = ({ ground, description, damage, exhaustion, active, position }) => {

    console.log(ground);

    return (
        <div style={{ backgroundImage: `url(${ground})`, backgroundSize: 'cover', position: 'relative', border: '1px solid pink', padding: '3px', width: '100px', height: '100px' }}>
            <p style={{ position: 'absolute', top: '5vh', zIndex: '4' }} >Postion: {position}</p>
            {/* <img src={ground} alt={description} style={{ height: '100px', width: 'auto', position: 'absolute' }} /> */}
            <p style={{ position: 'absolute', top: '0' }} >Damage: {damage}</p>
            <p style={{ position: 'absolute', inset: '10vh 0 0 0' }} >Exhaustion: {exhaustion}</p>
            {
                active &&
                <div style={{ margin: 'auto', zIndex: '10', background: 'pink', height: '80px', width: '80px', borderRadius: '40px' }}></div>
            }
        </div>
    )
}

export default Tile
