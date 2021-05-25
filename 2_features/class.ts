 //Class это своего рода шаблон для создания объектов со значениями и методами

class Vehicle {
  public drive(): void {
    console.log(`I'm driver`);  
  }
  public stop():void {
    console.log(`I'm stopped`);
  }
};

const vehicle = new Vehicle()

vehicle.drive()
vehicle.stop()

//Чем Class TS отличаются от ES2015

class Car extends Vehicle { //Car получает все функции Vehicle, но мы можем его переопределить
  private drive(): void{
    console.log(`I'm speed car`);    
  }
  startDrivingProcess(): void{
    this.drive()  
  }
}

//Теперь мы можем наследовать все функции класса Vehicle у Car
const car = new Car();

car.startDrivingProcess();
car.stop();

//Модификаторы: public, private, protected
//По умолчанию все модификаторы доступа имеют класс public

//Сразу после добавления модификатора 'private' мы получили ошибку
//Property 'drive' is private and only accessible within class 'Car'.ts(2341), что означает
//что свойство Car приватное и оно доступно только внутри Car. Это значит, что мы не можем 
//вызывать этот метод снаружи класса Car. Мы создали еще один метод публичный метод внутри класса Car - startDrivingProcess
//и уже через него прописали вызов метода drive, который в итоге вызвали за пределами класса car.startDrivingProcess();.   


//*Приватный метод не имеет ничего общего с безопасностью или защитой от хакеров, 
//добавление приватных методов никак не защищает код от доступа из вне, он нужен 
//для самих разработчиков, чтобы они по ошибке не вызвали его напрямую.  


//Protected - этот модификатор почти такой же как private, только добавляется еще доступ и класса через наследника. 
//Пример ниже: 

class VehicleProtected {
  public drive(): void {
    console.log(`I'm driver`);  
  }
  public stop():void {
    console.log(`I'm stopped`);
  }
  protected beep():void {
    console.log('Beeeeep');
    
  } 
};

class Car extends VehicleProtected { //Car получает все функции Vehicle, но мы можем его переопределить
  private drive(): void{
    console.log(`I'm speed car`);    
  }
  startDrivingProcess(): void{
    this.drive();
    this.beep();
  }
} 

//Поля в классах

class Vehicle2 {
  // color - один из способов инициализации переменной в классе
  color: string;
  
  //функция конструктов запускается сразу автоматически как только мы создаем новый объект класса 
  //Теперь мы можем передать в конструктов свое значение color
  constructor(color:string) {
    this.color = color;
  } 

//Этот код можно сократить

class Vehicle2 {
  //указываем модификатор public в конструкторе, color становится переменной в которую записывается
  //значение string.
  //Можно вместо public использовать другие модификаторы, например private, но в таком случае мы не 
  //сможем обращаться к этому классу из вне. 
  
  constructor(public color: string) { }
  public drive(): void {
    console.log(`I'm driver`)
  }
  public stop(): void {
    console.log(`I'm stopped`)
  }
}
//Поля и наследования

class car extends Vehicle2{  
  constructor(public wheels: number, color: string) {
    super(color);
  }
}

const vehicle = new Vehicle2('black')
console.log(vehicle.color)





