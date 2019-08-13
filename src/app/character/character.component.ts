import { Component, OnInit, Input } from '@angular/core';
import { Character, Review } from '../models'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})


export class CharacterComponent implements OnInit {

  photoUrl: string
  score: number 
  pseudo: string

  constructor() { 
    
  }

  @Input() character

  

  disabledBtn1 = false;
  disabledBtn2 = false; 
  

  onVoted(review: Review) {
      if (review == Review.like) {
        this.score = this.character.score++;
      } else if (review == Review.dislike) {
        this.score = this.character.score--;
      }
    this.gererActivationBoutons();
  }

  gererActivationBoutons() {
    if (this.character.score >= 5)
      this.disabledBtn1 = true;
    else if (this.character.score < 5) {
      this.disabledBtn1 = false;
    }
    if (this.character.score <= -5)
      this.disabledBtn2 = true;
    else if (this.character.score > -5) {
      this.disabledBtn2 = false;
    }
    
  }



  ngOnInit() {
    this.gererActivationBoutons();
    
  } 


}
