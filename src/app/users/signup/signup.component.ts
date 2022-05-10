import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name : string = 'robin';
  text :string = '';
  constructor() { }

  ngOnInit(): void {
  }

 getName()
  {
   let x = prompt("Please enter your name", "robin");

   if(x != null && x != ""){
    this.text = "Hello " + x + "! How are you today?";
   } 
   else{
    this.text = "User cancelled the prompt.";
   }
  }
}
