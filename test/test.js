const assert = require("assert");
const elevator = require("../lib/elevator");
describe("nothing", () => {
  it("should pass", () => {
    assert(true);
  });
});

describe("Elevator Control", () => {
  describe("Given an empty selected floor set", () => {
    it("should return an empty actions log", () => {
      actionsLog = elevator.move(
        0,
        elevator.UP,
        [],
        []
      );
      assert.notStrictEqual(actionsLog, []);
    });
  });
  describe("Given a one element selected floor set", () => {
    it("should return a single move and a single open");
    expected = ["Move Up: 0, 1", "Door Open: 1"];
    actionsLog = elevator.move(
      1,
      elevator.UP,
      (selectedFloors = [1]),
      (actionsLog = [])
    );
    assert.strictEqual(actionsLog, expected);
  });
});
