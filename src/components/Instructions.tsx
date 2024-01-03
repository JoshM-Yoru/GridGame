import "./Instructions.css";

const Instructions = () => {

    return (
        <div className="instructions-container">
            <h1>Welcome To The Grid Game</h1>
            <h3>Instructions:</h3>
            <p>
                Navigate the level from the start to finish without dying or
                running out of movement by using the arrow keys or h,j,k,l. The window will center for you on every move you make.
            </p>
            <p>
                The level is a 100 x 100 grid with the start and finish being
                completely opposite of each other.
            </p>
            <p>
                Below is a legend of the terrain, your current stats, and a toggle to show
                starting and ending squares numbers as well as all numbers of the tiles. Just scroll in the game window to
                find your player and then use the arrow keys to move around
            </p>
            <table>
                <tbody>
                    <tr>
                        <th>Legend</th>
                        <th>Description</th>
                        <th>Damage</th>
                        <th>Exhaustion Rate</th>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/grass.jpg" alt="Grass" />
                        </td>
                        <td>Normal Grass. Walk On!</td>
                        <td>-0 hp</td>
                        <td>-1 movement</td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/ice.webp" alt="Ice" />
                        </td>
                        <td>
                            Ice. You can slide onto the next spot but you might
                            slip!
                        </td>
                        <td>-5 hp</td>
                        <td>-0 movement</td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/mud.webp" alt="Mud" />
                        </td>
                        <td>
                            Mud. Move across it if you must, just don't get
                            stuck!
                        </td>
                        <td>-10 hp</td>
                        <td>-5 movement</td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/lava.webp" alt="Lava" />
                        </td>
                        <td>Lava. Just don't.</td>
                        <td>-50 hp</td>
                        <td>-10 movement</td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/stone.webp" alt="Start" />
                        </td>
                        <td>Starting Position.</td>
                        <td>-0 hp</td>
                        <td>-0 movement</td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/gold.webp" alt="Finish" />
                        </td>
                        <td>Finish Line. There is gold here!</td>
                        <td>-0 hp</td>
                        <td>-1 movement</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="player" />
                        </td>
                        <td>This is you!</td>
                        <td>100 hp</td>
                        <td>150 movement</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Instructions;
