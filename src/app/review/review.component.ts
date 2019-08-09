import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Character, Review } from '../models'


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  @Output() review: EventEmitter<Review> = new EventEmitter<Review>();
  @Input() btnLikeActif = true;
  @Input() btnDislikeActif = true;
  
  like() {
    this.review.emit(Review.like);
  }

  dislike() {
    this.review.emit(Review.dislike);
  }

  ngOnInit() {
   
  }

 } 
