const elevator = require("./lib/elevator");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your current floor: ", (floor) => {
  readline.question(
    "Enter a comma separated list of selected floors: ",
    (selectedFloors) => {
      selectedFloors = selectedFloors.split(",").map((num) => {
        return parseInt(num);
      });
      console.log(elevator.move(parseInt(floor), elevator.UP, selectedFloors));
      readline.close();
    }
  );
});
