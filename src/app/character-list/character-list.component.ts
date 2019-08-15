import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input() characterList: Character[];
  p: number = 1;
  debut: number = 0;
  fin: number = 3;
  nbrButton: number;
  tabButton = [];


  constructor() { 

  }

  remplirTab(nbr: number) {

    for (let i = 0; i < nbr; i++) {
      this.tabButton.push(i);
    }
  }

  ngOnInit() {
    this.nbrButton = Math.floor(this.characterList.length / 3);
    if (this.characterList.length % 3 != 0 || this.nbrButton === 0) {
      this.nbrButton += 1;
    }
    this.remplirTab(this.nbrButton);


  }

}
