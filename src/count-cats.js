const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let count = 0;
    let cat = "^^";
      for (let mas of backyard) {
        Array.from(mas).filter((item) => item === cat ? count++ : count)
      }
      return count;
}
