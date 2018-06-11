
var setA = new Set([1,2,3,4])
var setB = new Set([2,3,7])
var setC = new Set([3,4,5,6])

function union(set1, set2){
    var _union = new Set(set1)
    for( var elem of set2){
        _union.add(elem)
    }
    return _union
}
console.log(union(setA, setB))

function intersection(set1, set2){
    var _intersection = new Set()
    for( var elem of set2){
        if( set1.has(elem)){
            _intersection.add(elem)
        }
    }
    return _intersection
}
console.log(intersection(setA, setB))

function difference(set1, set2){
    var _difference = new Set(set1)
    for( var elem of set2){
        if( set1.has(elem)){
            _difference.delete(elem)
        }
    }
    return _difference
}
console.log(difference(setA, setC))


var myArray = ['value1', 'value2', 'value3'];

// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);

mySet.has('value1'); // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray


var text = 'India';

var mySet = new Set(text);  // Set ['I', 'n', 'd', 'i', 'a']
console.log(mySet.size);  // 5

//...NOTE: Checking whether an element exists in a collection using indexOf for arrays is slow than Set method.
var name = ['simon', 'wax','wax']
var myName = new Set(name)
console.log(myName.has('wax'))

//...NOTE: Set objects store unique values; you don't have to keep track of duplicates by yourself.
console.log(new Set(name)) //...or console.log(Array.from(new Set(name)))


//...Write a function aclean(arr) that returns an array cleaned from anagrams.

//...Anagrams are words that have the same number of same letters, but in different order.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//...We’ll use the letter-sorted variants as map keys to store only one value per each key:
function aClean(array){
    var map = new Map()
for( var word of arr){
    var sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
}
return Array.from(map.values())//..OR...simply return map.values()
}
console.log(aClean(arr))

//...OR...
//...Here we could also use a plain object instead of the Map, because keys are strings.
function aCleaning(array){
var obj = {}
for( var i = 0; i < array.length; i++){
    var sorted = array[i].toLowerCase().split('').sort().join('')
    obj[sorted] = array[i]
}
return Object.values(obj)
}
console.log(aCleaning(arr))

//...OR...

let aclean = (array) => {
    let emptyArr = []
    for(var word of array){
        var sorted = word.toLowerCase().split('').sort().join('')
        emptyArr.push(sorted)
    }
    let set = new Set(emptyArr)
    let returnArr = []
    for( var i of set){
        returnArr.push(array[emptyArr.indexOf(i)])
    }
    return returnArr
}
console.log(aclean(arr))

var  messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

var x = new Map(Object.entries({name: 'simon', age: 20}))
console.log(x)
console.log(x.keys())
console.log(x.values())
console.log(x.entries())


var user = {
    name: 'simon',
    age: 20,
}
for( let key in user){
    // console.log(key)
    console.log(key + ' is ' + user[key])
}

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for(let code in codes) {
    console.log( +code ); // 49, 41, 44, 1
    console.log( code ); // +49, +41, +44, +1
  }