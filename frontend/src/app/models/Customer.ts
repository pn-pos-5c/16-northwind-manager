export default class Customer {
  id: number;
  companyName: string;
  contactName: string;
  city: string;
  country: string;

  constructor(id: number, companyName: string, contactName: string, city: string, country: string) {
    this.id = id;
    this.companyName = companyName;
    this.contactName = contactName;
    this.city = city;
    this.country = country;
  }
}
