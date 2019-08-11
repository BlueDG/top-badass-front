import { Component } from '@angular/core';
import { Character } from '../app/models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'top-badass-front';
  characterProto: Character;

  
}
