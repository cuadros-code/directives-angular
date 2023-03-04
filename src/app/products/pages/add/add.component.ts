import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  myForm = this.fb.group({
    name: ['', Validators.required],
  });

  message: string = 'this filed is required'
  color: string = 'red'

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  hasError(field: string): boolean {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched || false;
  }


  changeName(){
    this.message = Math.random().toString();
  }

  changeColor(){
    this.color =  "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }


}
