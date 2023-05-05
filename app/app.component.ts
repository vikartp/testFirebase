import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';

  constructor(private serve: AppService){}

  testFire(){
    this.serve.testFirebasePut().subscribe(data=> {
      console.log(data);
    }, err=> {
      console.log(err)
    })
  }
}
