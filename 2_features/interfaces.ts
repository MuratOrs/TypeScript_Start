//Симбиоз Interface и Class позволяет нам повторно использовать код в TS

//Мы самостоятельно создаем тип Interface (как string, number...),
//описывая значения свойств и типы значений объекта

const oldCivic = {
  name: 'ciric',
  year: 2000,
  isBroken: true,
}

//Код в ниже валидный, но проблема в такой длинной аннотации, а что делать
//если принимаемых аргументов будет еще больше или мы захотим создать еще аналогичную функцию?
//В таких случаях лучше использовать инструмент TS Interface

const printVehicle = (vehicle: {
  name: string
  year: number
  isBroken: boolean
}): void => {
  console.log(`Name: ${vehicle.name} 
              Year: ${vehicle.year}
              is de auto broken: ${vehicle.isBroken}`)
}

printVehicle(oldCivic)

/*=====  Улучшаем код с помощью Interface  ======*/

// Название Interface должно быть с заглавной буквы. Также правильно
//использовать более общее название типо "Транспорное средство - Vehicle"

interface Vehicle {
  name: string
  year: Date
  isBroken: boolean
  summary(): string
}

const oldCivicInterface = {
  name: 'ciric',
  year: new Date(),
  isBroken: true,
  summary(): string {
    return `Name: ${this.name} ${this.year} ${this.isBroken}`
  },
}

//В данном примере мы через Interface указали, какие данные мы ожидаем: sting, number,boolean

const printVehicleInterface = (vehicle: Vehicle): void => {
  /* console.log(`Name: ${vehicle.name} 
              Year: ${vehicle.year}
              is de auto broken: ${vehicle.isBroken}`) */
  console.log(vehicle.summary())
}

printVehicleInterface(oldCivicInterface)

//*Interface может иметь не только примитивные типы, но и такие как Date,
//также в Interface мы можем помещать функции

/*=====  Функции в Interface: Code Refactoring   ======*/

//В данном случае использовать название Vehicle уже не будет верным,
//лучше заменить его на значение Reporting

interface Reporting {
  summary(): string
}

const printSummary = (item: Reporting): void => {
  /* console.log(`Name: ${vehicle.name} 
              Year: ${vehicle.year}
              is de auto broken: ${vehicle.isBroken}`) */
  console.log(item.summary())
}


// Повторное использование interfaces

const cocaCola = {
  color: 'brown',
  carbonate: true,
  sugar: 10,
  summary() {
    return `Cola has ${this.sugar} grams of sugar`
  }
}


const printSummary2 = (item: Reporting): void => {
  /* console.log(`Name: ${vehicle.name} 
              Year: ${vehicle.year}
              is de auto broken: ${vehicle.isBroken}`) */
  console.log(item.summary())
}

printSummary2(cocaCola)