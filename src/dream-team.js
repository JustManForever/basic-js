const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members) !== true) {
    return false;
  }
  let arr = [];
  for (let mem of members) {
    if (typeof mem === 'string') {
      arr.push(mem.trim().substring(0,1).toUpperCase())
    }
  }
  return arr.sort().join('');
};
