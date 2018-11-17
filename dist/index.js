"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomInt = require('random-int');
/**
 * Return list with specific length random int numbers.
 * @example
 * listLength = 2, min = 1, max 5 ---> [ 2, 5]
 * listLength = 6, min = 1, max 500 ---> [ 100, 345, 3, , 45, 2, 5]
 * @param listLength {number} Length list
 * @param min {number}  min value to use in random
 * @param max {number} max value use in random
 */
function randomIntList(listLength, min, max) {
    if (max === void 0) { max = -1; }
    if (max === -1) {
        max = min + 10;
    }
    if (listLength < 0) {
        listLength = 5;
    }
    var arr = new Array(listLength);
    for (var i = 0; i < listLength; i++) {
        arr[i] = randomInt(min, max);
    }
    return arr;
}
exports.randomIntList = randomIntList;
