require("dotenv").config();
const TOP_FLOOR = process.env.TOP_FLOOR || 10;
const BOTTOM_FLOOR = process.env.BOTTOM_FLOOR || -1;
const UP = 1;
const DOWN = 0;
const INVALID_INPUT_SELECTED_MESSAGE = `Invalid input, selected floors be a comma separated of numbers; all numbers between ${BOTTOM_FLOOR} and ${TOP_FLOOR}`;
const INVALID_INPUT_SELECTED_MESSAGE_FLOOR = `Invalid input, current floor must all be between ${BOTTOM_FLOOR} and ${TOP_FLOOR}`;

module.exports.move = (
  floor = 0,
  direction = UP,
  selectedFloors = [],
  actionsLog = []
) => {
  if (!isSelectedFloorsValid(selectedFloors)) {
    throw INVALID_INPUT_SELECTED_MESSAGE;
  }
  if (!isFloorValid(floor)) {
    throw INVALID_INPUT_SELECTED_MESSAGE_FLOOR;
  }
  floor = parseInt(floor);
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

function moveDown(floor, actionsLog) {
  actionsLog.push(`Move Down: ${floor}, ${floor - 1}`);
  return [floor - 1, actionsLog];
}

function isFloorValid(floor) {
  if (typeof floor !== "number" || floor < BOTTOM_FLOOR || floor > TOP_FLOOR) {
    return false;
  }
  return true;
}

function isSelectedFloorsValid(selectedFloors) {
  if (
    typeof selectedFloors !== "object" ||
    selectedFloors.includes(NaN) ||
    Math.min(...selectedFloors) < BOTTOM_FLOOR ||
    Math.max(...selectedFloors) > TOP_FLOOR
  )
    return false;
  else return true;
}

function openDoor(floor, actionsLog) {
  actionsLog.push(`Door Open: ${floor}`);
  return actionsLog;
}
