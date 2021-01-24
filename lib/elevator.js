const UP = 1;
const DOWN = 0;

module.exports.move = (
  floor = 0,
  direction = UP,
  selectedFloors = [],
  actionsLog = []
) => {
  if (selectedFloors.includes(floor)) {
    actionsLog = openDoor(floor, selectedFloors, actionsLog);
    selectedFloors = selectedFloors.filter((value, indexarr) => {
      return value !== floor;
    });
  }
  if (selectedFloors.length === 0) {
    return actionsLog;
  } else if (direction == UP && Math.max(selectedFloors) > floor) {
    let ar = moveUp(floor, actionsLog);
    floor = ar[0];
    actionsLog = ar[1];
  } else if (direction == DOWN && Math.min(selectedFloors) < floor) {
    let ar = moveDown(floor, actionsLog);
    floor = ar[0];
    actionsLog = ar[1];
  } else {
    direction = (direction + 1) % 2;
  }
  return this.move(floor, direction, selectedFloors, actionsLog);
};

function moveUp(floor, actionsLog) {
  actionsLog.push(`Move Up: ${floor}, ${floor + 1}`);
  return [floor + 1, actionsLog];
}

function moveDown(floor, actinosLog) {
  actionsLog.push(`Move Down: ${floor}, ${floor - 1}`);
  return [floor - 1, actionsLog];
}

function moveValid() {}

function openDoor(floor, selectedFloors, actionsLog) {
  actionsLog.push(`Door Open: ${floor}`);
  return actionsLog;
}
