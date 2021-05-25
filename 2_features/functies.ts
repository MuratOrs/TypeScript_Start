const add = (a: number, b: number):number => {
   return a + 6
   
};

console.log(add(10, 66))


const subtract = (a: number, b: number):number => {
  return a + b;
}

/* * Очень важно всегда писать аннотацию для возвращаемого значения функции,
  потому что в таком случае мы сразу же на стадии разработки получил уведомление об ошибке.
  Что значительно облегчит работу с кодом далее. */


  const divide = (a: number, b: number):number => {
    return a / 6
    
 };


 const multiply = (a: number, b: number):number => {
   return a * 6
   
};

//Void

const logger = (message:string):void => { //В данном случае мы явно указываем, что функция ничего не возвращает.
console.log(message); 
}

logger('Hello, world!');

//Never

// тип never используется только в том случае, когда функция не достигает своего конца и не будет ничего возвращать, но
//в примере ниже, мы должны указать возвращаемое значение, иначе ts будет выдавать ошибку

const throwError = (message: string): string /* never */ => {                                                   
  if(!message){ 
    throw new Error(message)
  }
  return message;
}

//В случае если мы указываем условия выполнения и ничего не возвращаем
//нужно указывать не never, а void

const throwError = (message: string): void => {                                                   
  if(!message){ 
    throw new Error(message)  }
}

//Destructuration 

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};


const logWeather = ({ date, weather }: {date:Date, weather: string}):void => {
    console.log(date);
    console.log(weather);
  }

//ES2015
/* const logWeather = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
  } */



logWeather(todayWeather)
