const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
   let hahoi  = {
    turns : 1,
    seconds : 1
  }

  for (disksNumber; disksNumber > 1; disksNumber--) {
    hahoi.turns += (hahoi.turns + 1);
  }

  hahoi.seconds = Math.floor(hahoi.turns / (turnsSpeed/3600))

  return hahoi;
}
