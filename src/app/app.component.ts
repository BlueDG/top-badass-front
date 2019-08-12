import { Component } from '@angular/core';
import { Character } from '../app/models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'top-badass-front';
  character: Character[] = 
  

  /*character: Character[] =*/ [
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


  
}
