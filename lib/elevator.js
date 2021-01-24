const UP = 1;
const DOWN = -1;

module.exports.move = (
  floor = 0,
  direction = UP,
  selectedFloors = [],
  actionsLog = []
) => {
  if (selectedFloors.includes(floor)) {
    console.log("door opening")
    actionsLog = openDoor(floor, selectedFloors, actionsLog);
    selectedFloors = selectedFloors.filter((value, indexarr) => {
      return value !== floor;
    });
  }
  console.log(`Selected floors 14 ${selectedFloors}`)
  console.log(`Action Log ${actionsLog}`)
  if (selectedFloors === []) {
    console.log(`returning ${actionsLog}`);
    return actionsLog;
  }
  if (direction == UP && Math.max(selectedFloors) > floor) {
    floor, (actionsLog = moveUp(floor, actionsLog));
  }
  // if(direction)
  this.move(floor, direction, selectedFloors, actionsLog)
};

function moveUp(floor, actionsLog) {
  actionsLog.push(`Move Up: ${floor}, ${floor + 1}`);
  return floor + 1, actionsLog;
}

function moveDown() {}

function moveValid() {}

function openDoor(floor, selectedFloors, actionsLog) {
  actionsLog.push(`Door Open: ${floor}`);
  return  actionsLog;
}
