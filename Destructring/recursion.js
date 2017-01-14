/**
 * Created by YSingh on 14/01/17.
 */

const numbers = [1, 2, 3];

function double(numbers) {
    return multiply(numbers, 0);
}

function multiply(numbers, index) {
    if(numbers[index] === undefined) {
        return numbers;
    }
    numbers[index] = numbers[index] * 2;
    index++;
    return multiply(numbers, index);
}