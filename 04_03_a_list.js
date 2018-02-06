function arrayToList(arr) {
    if (arr.length == 1) return {value: arr[0], rest: null};
    return {value: arr[0], rest: arrayToList(arr.slice(1))};
}

function listToArray(list) {
    if (list.rest == null) return list.value;
    return [list.value].concat(listToArray(list.rest));
}

function prepend(e, list) {
    return {value: e, rest: list};
}

function nth(list, n) {
    if (n == 0) return list.value;
    if (n > 0 && list.rest == null) return undefined;
    return nth(list.rest, n -1);
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
