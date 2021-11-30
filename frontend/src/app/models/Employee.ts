export default class Employee {
  id: number;
  name: string;
  city: string;
  country: string;

  constructor(id: number, name: string, city: string, country: string) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.country = country;
  }
}
