import { Component, OnInit } from '@angular/core';
import { Character } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  character: Character[] = [
    { 
      photoURL: "https://i.pinimg.com/originals/1c/08/89/1c08893b04e0e804df5372e21a42fb28.jpg",
      score: 5,
      pseudo: "Ellen Ripley"
    },
    { 
      photoURL: "https://i.pinimg.com/originals/1c/08/89/1c08893b04e0e804df5372e21a42fb28.jpg",
      score: 0,
      pseudo: "Kyle Reese"
    },
    { 
      photoURL: "https://i.pinimg.com/originals/1c/08/89/1c08893b04e0e804df5372e21a42fb28.jpg",
      score: 2,
      pseudo: "John Doe"
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
