/*
Rewrite the list data structure from the exercises in Chapter 4 as a class. Give List objects their old value and rest properties, but also a toArray method and a length getter that returns the length of the list. Make fromArray a static method on the List constructor.

In order for lists to work as a class with methods, we can no longer represent the empty list as null, but have to create a special instance of our class that acts as the empty list placeholder, and compare with that instance, instead of null, when checking if we’ve reached the end of a list. Store this instance in List.empty (a static property).
*/

class List {
    contstructor(val, rest) {
        this.value = val;
        this. rest = rest;
    }

}

console.log(List.fromArray([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(List.fromArray([10, 20, 30]).toArray());
// → [10, 20, 30]
console.log(new List(2, List.empty).length);
// → 1
