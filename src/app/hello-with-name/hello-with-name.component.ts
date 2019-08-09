import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-with-name',
  templateUrl: './hello-with-name.component.html',
  styleUrls: ['./hello-with-name.component.css']
})


export class HelloWithNameComponent implements OnInit {

  @Input() firstname:string; 


  constructor() {
      
   }

  ngOnInit() {

  }

}
