# Mr Roboto - Toy Robot Simulator
### Classic coding test in vanillaJS


## Implementation
* Vanilla JS
** No dependencies
* Cute isometric UI with SVG sprites
* Automatic reporting

## Future ideas
* Responsive scaling
* Arrow keys for movement

## Usage

Open index.html

GUI for control, or issue commands in console:
- turnLeft();
- turnRight();
- move();

// Note: Safari and Firefox need to disable local file restrictions from Develop menu

# Toy Robot Simulator Requirements

Create an application that can read in commands of the following form:
- PLACE X,Y,F
- MOVE
- LEFT
- RIGHT
- REPORT

## Requirements
- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
- There are no obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.
- PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- REPORT will announce the X,Y and orientation of the robot.
- A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
- The robot must not fall off the table during movement. This also includes the initial placement of the toy robot. Any move that would cause the robot to fall must be ignored.

##Examples

Example Input and Output:
a)
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
b)
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
c)
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH

## Notes
- There must be a way to supply the application with input data.
- Provide test data to exercise the application.
- The application must run and you should provide sufficient evidence that your solution is complete by, as a minimum, indicating that it works correctly against the supplied test data.
- The submission should be production quality and it can be done in any language
- The code should be original and you may not use any external libraries or open source code to solve this problem, but you may use external libraries or tools for building or testing purposes. Specifically, you may use unit testing libraries or build tools available for your chosen language.