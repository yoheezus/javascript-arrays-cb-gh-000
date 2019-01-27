var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
}

function addElementToEndOfArray(array, element) {
    return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.shift(element)
    return array
}

function accessElementinArray(array, index) {
    return array[index]
}
