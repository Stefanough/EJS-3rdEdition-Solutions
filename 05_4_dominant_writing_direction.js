const SCRIPTS = require('./ejsLanguageScript.js');

//Given a character code, finds the corresponding script (if any):
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from &&
                                           code < to)) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
    let directions = {ltr: 0, rtl: 0, ttb: 0};
    for (let char of text) {
        let script = characterScript(char.codePointAt(0));
        if (script != null) {
            directions[script.direction]++;
        }
    }
    //for each character
        //find codepoint
        //find script by checking codepoint in script ranges
        //direction[script.direction] ++
    //return direction with highest value
    return Object.keys(directions).reduce((a, b) => directions[a] > directions[b] ? a : b);
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
