import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input() characterList: Character[];

  constructor() { 
    this.characterList = [
      {pseudo:"Ellen Ripley", score: 5, photoURL:"https://i.pinimg.com/originals/c3/27/18/c32718bbc7dc3078c9d108910483643c.jpg"},
      {pseudo:"Rick Deckard", score: 3, photoURL:"https://vignette.wikia.nocookie.net/bladerunner/images/d/de/Deckard.jpg/revision/latest/scale-to-width-down/350?cb=20190318190453"},
      {pseudo:"Kyle Reese", score: 4, photoURL:"https://res.cloudinary.com/dibsl9ebc/image/upload/v1443747630/j3urlhds7jdpdqyymxbf.jpg"}
    ]

  }

  ngOnInit() {
   

  }

}
