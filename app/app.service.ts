import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  urlNew =
    'https://adarshyuvaclub-3c3f5-default-rtdb.asia-southeast1.firebasedatabase.app/test.json';

  urlTempleFund =
    'https://adarshyuvaclub-3c3f5-default-rtdb.asia-southeast1.firebasedatabase.app/temple.json';

  constructor(private http: HttpClient) {}

  testFirebasePut() {
    const testArray = [
      {
        name: 'vikash',
        age: 25,
      },
      {
        name: 'raj',
        age: 34
      }
    ];
    const templeFundDetail = [
      {
        name: 'test',
        date: new Date(),
        amount: 1000
      },
      {
        name: 'test1',
        date: new Date(),
        amount: 500,
        comments: 'Some family issues'
      }
    ]
    return this.http.put(this.urlTempleFund, templeFundDetail);
  }
  run() {
    console.log('app service');
  }
}
