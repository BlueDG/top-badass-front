import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Review } from '../models'


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  @Output() review: EventEmitter<Review> = new EventEmitter<Review>();
  @Input() btn: boolean;
  @Input() btn2: boolean;
  
  like() {
    this.review.emit(Review.like);
  }

  dislike() {
    this.review.emit(Review.dislike);
  }

  ngOnInit() {
   
  }

 } 
