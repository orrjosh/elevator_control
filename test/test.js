const assert = require("assert");
const elevator = require("../lib/elevator");

describe("Elevator Control Move", () => {
  describe("Given an empty selected floor set", () => {
    it("should return an empty actions log", () => {
      actionsLog = elevator.move(0, elevator.UP, [], []);
      assert.deepEqual(actionsLog, []);
    });
  });
  describe("Given a one element selected floor set, going up", () => {
    it("should return a single move and a single open", () => {
      expected = ["Move Up: 0, 1", "Door Open: 1"];
      actual = elevator.move(
        0,
        elevator.UP,
        (selectedFloors = [1]),
        (actionsLog = [])
      );
      assert.deepEqual(actual, expected);
    });
  });
  describe("Given a one element selected floor set, going down", () => {
    it("should return a single move and a single open", () => {
      expected = ["Move Down: 1, 0", "Door Open: 0"];
      actual = elevator.move(
        1,
        elevator.DOWN,
        (selectedFloors = [0]),
        (actionsLog = [])
      );
      assert.deepEqual(actual, expected);
    });
  });
  describe("Given a selected floor set mixing directions", () => {
    it("should go to the correct floors in order", () => {
      expected = [
        "Door Open: 1",
        "Move Up: 1, 2",
        "Door Open: 2",
        "Move Down: 2, 1",
        "Move Down: 1, 0",
        "Door Open: 0",
      ];
      actual = elevator.move(
        1,
        elevator.UP,
        (selectedFloors = [0, 1, 2]),
        (actionsLog = [])
      );
      assert.deepEqual(actual, expected);
    });
    it("should not matter if the set is in orderreturn a single move and a single open", () => {
      expected = [
        "Door Open: 1",
        "Move Up: 1, 2",
        "Door Open: 2",
        "Move Down: 2, 1",
        "Move Down: 1, 0",
        "Door Open: 0",
      ];
      actual = elevator.move(
        1,
        elevator.UP,
        (selectedFloors = [1, 0, 2]),
        (actionsLog = [])
      );
      assert.deepEqual(actual, expected);
    });
  });
});
describe("Elevator Control Move isSelectedFloorsValid", () => {
  it("should return false if lowest floor less than bottom floor", () => {
    assert.deepEqual(elevator.isSelectedFloorsValid([-2]), false);
  });
});
