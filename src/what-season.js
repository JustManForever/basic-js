const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 let year = new Map();
    year.set([11,0,1],'winter').set([2,3,4],'spring').set([5,6,7],'summer').set([8,9,10],'autumn');

    if(arguments.length === 0) {
        return 'Unable to determine the time of year!'
    }

    if(isNaN(Date.parse(date))) {
        throw Error;
    }

    if(Object.prototype.toString.call(date) !== '[object Date]') {
        throw Error;
    }

    for (let month of year.keys()) {
        if(month.indexOf(date.getMonth()) !== -1)
            return year.get(month);
    }
};
