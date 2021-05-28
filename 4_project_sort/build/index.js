"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
/* const numbersCollection = new NumbersCollection([1, -55,-888, -9888 -5, 1, -8, 11, 88, 3])
console.log(numbersCollection.data);
 */
/* const charactersCollection = new CharactersCollection('ZzWfZZbbTt')
charactersCollection.sort();
console.log(charactersCollection.data);
 */
var linkedList = new LinkedList_1.LinkedList;
linkedList.add(100);
linkedList.add(-10);
linkedList.add(-5);
linkedList.add(7);
linkedList.sort();
linkedList.print();
