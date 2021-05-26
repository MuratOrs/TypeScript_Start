import faker from 'faker'

//export default 'DefExpo' - you can export everything by default, 
//but this practice is not encouraged in TS

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}



