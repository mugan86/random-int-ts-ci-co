/**
 * Return list with specific length random int numbers.
 * @example
 * listLength = 2, min = 1, max 5 ---> [ 2, 5]
 * listLength = 6, min = 1, max 500 ---> [ 100, 345, 3, , 45, 2, 5]
 * @param listLength {number} Length list
 * @param min {number}  min value to use in random
 * @param max {number} max value use in random
 */
export declare function randomIntList(listLength: number, min: number, max?: number): Array<number>;
