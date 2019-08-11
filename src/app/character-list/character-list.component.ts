import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input() characterList: Character[];

  constructor() { }


  ngOnInit() {

  }

}
