let oranges;
oranges = 44;

let speed: string = '36km';
let isMarried: boolean = true;
let numString: any = 'sddsf';
numString = 44;
let nothing: null = null;
let nothing1: undefined = undefined;

//built-in objects

let now: Date = new Date();

//array 

let colors: string[] = ['red', 'green', 'blue'] //массив в котором будут только строки
let numbers: number[] = [11,54,66,88,77,88]
let result: boolean[] = [true, false, true, true]


//class

class Car {
}

let car: Car = new Car();

// object literal 

let point: { x:number; y:number} = {
  x: 10,
  y: 20

}

// functions

const logNumber: (i:number) => void  = (i: number) => {
  console.log(i);
  
}

// any

// When to use type annotation

//1) Function returns the 'any' type

const json = '{"x":10, "y":20}';
const coordinates: { x: number; y:number} = JSON.parse(json)

console.log(coordinates); // {x:10, y:20}

// 2) When we declare a variable on one line and initialize it later


let word = ['one', 'two', 'three'];

let foundWord = false; //или можно самостоятельно указать ожидаемое значение boolean
for (let i = 0; i < word.length; i++){
  if (word[i] === 'two') {
    foundWord = true;
  }
}

// 3) Variables whoes type can't be inferred 

let myNumbers = [-10, -14, 15]
let positiveNumber: boolean | number; //переменная может содержать как boolean так и number

for (let i; i < myNumbers.length; i++){
  if (myNumbers[i] > 0) {
    positiveNumber = myNumbers[i];
  }
}



 


