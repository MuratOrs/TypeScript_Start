//аннотации в массивах

const profile = {
  name: 'Jack',
  age: 25,
  coordinates: {
    lat: 1,
    lng: 25
  },
  setAge(age: number): void {
    this.age = age;
  }
};

//Destructuration

const { age }: { age: number } = profile;
// вначале мы указываем объекты для диструктаризации, а уже затем задаем им типы после символа ":"
const { coordinates: { lat, lng } }: {coordinates: {lat:number, lng:number}} = profile;

