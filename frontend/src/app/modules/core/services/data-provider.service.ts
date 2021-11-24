import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataProviderService {
  private rootUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) {
  }
}
