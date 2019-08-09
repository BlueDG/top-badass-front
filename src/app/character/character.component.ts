import { Component, OnInit, Input } from '@angular/core';
import { Character, Review } from '../models'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})


export class CharacterComponent implements OnInit {

  constructor() { }

  @Input() characterProto: Character; 
  
  characterPrototype: any = {
    photoURL: "https://i.pinimg.com/originals/1c/08/89/1c08893b04e0e804df5372e21a42fb28.jpg",
    score: 0,
    pseudo: "Ellen Ripley"
  }

  likeActif = true;
  dislikeActif = true; 
  

  onVoted(review: Review) {
    if (review == Review.like) {
      this.characterPrototype.score++;
    } else if (review == Review.dislike) {
      this.characterPrototype.score--;
    }
  }

  gererActivationBoutons() {
    this.likeActif = this.characterPrototype.score < 10;
    this.dislikeActif = this.characterPrototype.score > -10;
  }

  ngOnInit() {
    this.gererActivationBoutons();
    
  } 



}
