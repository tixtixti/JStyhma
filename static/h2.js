
var taulukoita = [   
[2, 4, 5, 3, 2],
[2, 4, 5, 3, 2,"S"],
[2, 4, undefined, 3, 2],
[1, 2, null],
["SS", "SS"],
[1.2, 2]
];


function containsOnlyIntegers(array) {
    return array.every(elem => Number.isInteger(elem));
}

function containsOnlyNumbers(array) {
    return array.every(elem => typeof(elem) === "number");
}

function containsOnlyStrings(array) {
    return array.every(elem => typeof(elem) === "string");
}

function isValidFloat(value) {
    return /^(\d+\.\d+)$/.test(value);
}

function isValidInteger(value) {
    return /^(\d+)$/.test(value);
}