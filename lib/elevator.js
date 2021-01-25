const UP = 1;
const DOWN = 0;
const TOP_FLOOR = 10;
const BOTTOM_FLOOR = -1;

module.exports.move = (
  floor = 0,
  direction = UP,
  selectedFloors = [],
  actionsLog = []
) => {
  var loopCount = 0;
  while (selectedFloors.length !== 0) {
    if (selectedFloors.includes(floor)) {
      actionsLog = openDoor(floor, actionsLog);
      selectedFloors = selectedFloors.filter((value, indexarr) => {
        return value !== floor;
      });
    }
    if (direction === UP && Math.max(...selectedFloors) > floor) {
      let ar = moveUp(floor, actionsLog);
      floor = ar[0];
      actionsLog = ar[1];
    } else if (direction === DOWN && Math.min(...selectedFloors) < floor) {
      let ar = moveDown(floor, actionsLog);
      floor = ar[0];
      actionsLog = ar[1];
    } else {
      direction = (direction + 1) % 2;
    }
  }
  return actionsLog;
};

function moveUp(floor, actionsLog) {
  actionsLog.push(`Move Up: ${floor}, ${floor + 1}`);
  return [floor + 1, actionsLog];
}

function moveDown(floor, actinosLog) {
  actionsLog.push(`Move Down: ${floor}, ${floor - 1}`);
  return [floor - 1, actionsLog];
}

function isSelectedFloorsValid(selectedFloors) {
  if (
    Math.min(...selectedFloors) < BOTTOM_FLOOR ||
    Math.max(...selectedFloors) > TOP_FLOOR
  )
    false;
  else true;
}

function openDoor(floor, actionsLog) {
  actionsLog.push(`Door Open: ${floor}`);
  return actionsLog;
}
