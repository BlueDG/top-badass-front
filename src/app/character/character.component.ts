import { Component, OnInit, Input } from '@angular/core';
import { Character, Review } from '../models'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})


export class CharacterComponent implements OnInit {

  constructor() { 
    
    this.characterList = [
      {photoURL: "", score: 0, pseudo: "name"},
      {photoURL: "", score: 1, pseudo: "name"}
    ]

  }

  @Input() characterList: Character[]; 
  
    /*characterProto: any = {
    photoURL: "https://i.pinimg.com/originals/1c/08/89/1c08893b04e0e804df5372e21a42fb28.jpg",
    score: 0,
    pseudo: "Ellen Ripley"
    } */
  
  disabledBtn1 = false;
  disabledBtn2 = false; 
  

  onVoted(review: Review) {
    if (review == Review.like) {
      this.characterProto.score++;
    } else if (review == Review.dislike) {
      this.characterProto.score--;
    }
    this.gererActivationBoutons();
  }

  gererActivationBoutons() {
    if (this.characterProto.score >= 5)
      this.disabledBtn1 = true;
    else if (this.characterProto.score < 5) {
      this.disabledBtn1 = false;
    }
    if (this.characterProto.score <= -5)
      this.disabledBtn2 = true;
    else if (this.characterProto.score > -5) {
      this.disabledBtn2 = false;
    }
    
  }



  ngOnInit() {
    this.gererActivationBoutons();
    
  } 

  


}
