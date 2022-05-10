import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "Hello World";
  name : string = "robin";

  getName () : [string, string] //return type
  {
    return [this.name, this.gettitle(this.title)];
  }

  gettitle( title :string ) : string
  {
    return title;
  }

  siteUrl = window.location.href;
  arr = ["abc" , "cde", "efg"];

  object = 
  {
    fullName : 'abandoned',
    NickName : 'Protector'
  };

  myevent(evt: any)
  {
   console.warn(evt);
  }
  displayValue =""; 
  getValue(value : any)
  {
    this.displayValue = value;
  }

  SeconddisplayValue =""; 
  getValueSecond(value : any)
  {
    this.SeconddisplayValue = value;
  }
  disableValue = true;
  makeEnable()
  {
    this.disableValue = false;
  }
  x = "green";

  colors = ["red", "blue", "green", "yellow"];
  objects = [
    {
      name : "robin",
      age : 18,
    },
    {
      name : "kratos",
      age : 21,
    },
    {
      name : "shahed",
      age : 25
    }
  ];

  submitValue(value: any)
  {
    console.log(value);
  }
}
