//В случае если мы создаем пустой массив, нам лучше указать аннотацию, так как TS
//не знает, какие данные стоит ожидать.

const colorsTypeInference: string[] = [];


//Однако в случае если мы сразу поместили в массив значения одного типа (в данном случае) string,
//в таком случае TS применит систему Type Inference и автоматически присвоит тип для массива

const colorsTypeAnnotations = ['red', 'green', 'yellow'];

//Мы также можем поместить в массив сложные объекты
//В данном примере массив применил Type Inference и указал тип массива Date

const dates = [new Date(), new Date()];


//Двумерный стринговый массив обозначается автоматически Type Inference  двумя парами скобок "string[][]"

const fruitByColorTypeInference = [
  ['tomato'],
  ['apple'],
  ['lemon']
];

//Если мы просто инициализируем переменную указав пустой массив
// в таком случае нужно указать тип массива явно Type Annotations

const fruitByColorTypeAnnotation: string[][] = [
  
];

//Помощь с выводом типов, когда мы извлекаем значение
//когда мы извлекаем элемент из ранее проинициализированного массива, TS
//автоматически присваем переменной ранее заданный тип

const color = colorsTypeAnnotations[0];
const color1 = colorsTypeAnnotations.pop();

//TS может предотвратить добавление в массив несовместимых типов

colorsTypeAnnotations.push(true)


//TS прекрасен тем, что мы можем задать тип помещенных данных,
//а потом воспользоваться всеми методами этиго типа. В данном
//случае мы можем пользоваться методами типа String

colorsTypeAnnotations.map((color:string):string => {
  return color.toUpperCase();
});

//Массивы могут содержать значения разных типов: Flexible types
//В указанном ниже случае TS автоматически определил, что
//мы имеем дело с массивом, который содежит в себе два типа данных: Data и String

const importantDate = [new Date(), '12/06/2021']

//Если мы в инициализации используем только один тип, но хотим добавить второй позже
//в таком случае мы должны указать будущий тип явно

const importantDateTypeAnnotations: (Date | string)[] = [new Date()];
importantDateTypeAnnotations.push('2021-11-2020')
importantDateTypeAnnotations.push(new Date());

//Однако если мы попытаемся поместить в массив number, в таком случае мы сразу получим ошибку 

importantDateTypeAnnotations.push(44);

// *Типизированные массивы нужно использовать каждый раз, когда нам нужно представить коллекцию
//записей в случайном порядке 