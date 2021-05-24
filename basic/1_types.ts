const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 66
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hallo, TypeScript'

const numberArray: number[] = [1,1,2,3,5,8,13]
const numberArray2: Array<number> = [1,1,2,3,5,8,13]

const words: string[] = ['Hello', 'TypeScript']

//Tuple

const contact: [string, number] = ['Mouris', 13365444]

//Any

let variable: any = 42
//...
variable = 'New String'
variable = []

//===============

//Void прописываем в случае если функция ничего не возвращает
function sayMyName(name: string): void {
  console.log(name);
  
}

sayMyName('Murat');

//Never

function throwError(message: string): never { 
      throw new Error(message)
 }

function infinite(): never {
  while (true) {
     
   }
}
 
//Type 

type Login = string

const login: Login = 'admin'
const login2: Login = 2

type ID = string | number
const id1: ID = 1235
const id2: ID = '1235'
// const id3: ID = true ... boolean not accepted 

type SomeType = string | null | undefined


