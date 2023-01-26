# App Logic Psuedo Code

## Parameters

- 100 x 100 grid
- Start and End Points
- Player has 100hp and 150 movement
- 4 types of terrain
    - Road/End
        - -0 hp
        - -1 movement
    - Speeder
        - -5 hp
        - -0 movement
    - Mud
        - -10 hp
        - -5 movement
    - Lava
        - -50 hp
        - -10 movement
    - Start
        - 0hp
        - 0 movement

## Logic

- Create a component for the tiles
- Populate a 100 x 100 matrix with components
- Set the start and ending points
- Inject data into components using rng from JSON
- User will press start to insert character into the starting position
- User will use arrows keys to move
    - This will be done traversing the matrix increment/decrementing the x and y values with 'x' being the position inside the nested array and 'y' being the position of the nested array 
    - Active tiles will be marked true when the user is on them while all others will be false
- JSON data for each object/tile will affect the user hp and movement, this will be done with state variables 

### Questions to ask

- Will the start and ending points be random or just hard coded at opposite ends?
- Will the user be able to see all, some, or none of the terrain tiles?
- Is there a limit to the amount of modified tiles?
