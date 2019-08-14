import { Component, OnInit } from '@angular/core';
import { Character } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  character: Character[] = [
    { 
      photoURL: "https://i.pinimg.com/originals/1c/08/89/1c08893b04e0e804df5372e21a42fb28.jpg",
      score: 5,
      pseudo: "Ellen Ripley"
    },
    { 
      photoURL: "https://files.brightside.me/files/news/part_25/256360/13365060-34965455-1111-0-1477637122-0-1477645637-1477645644-650-2-1488295420-650-a11306f2fd-1492090406.jpg",
      score: 4,
      pseudo: "Kyle Reese"
    },
    { 
      photoURL: "https://vignette.wikia.nocookie.net/bladerunner/images/d/de/Deckard.jpg/revision/latest/scale-to-width-down/350?cb=20190318190453",
      score: 2,
      pseudo: "Rick Deckard"
    },
    { 
      photoURL: "http://static.tvgcdn.net/rovi/showcards/feed/370/thumbs/31114370_1300x1733.jpg",
      score: -2,
      pseudo: "Johnny Rico"
    },
    { 
      photoURL: "https://vignette.wikia.nocookie.net/hitman/images/6/6b/Agent47HITMAN2016.png/revision/latest/scale-to-width-down/2000?cb=20160709203721",
      score: 4,
      pseudo: "47"
    },
    { 
      photoURL: "https://i.pinimg.com/236x/02/b8/3c/02b83c9dc7fb6136c712b679f5595af4--deus-ex-mankind-divided-jensen.jpg",
      score: 3,
      pseudo: "Adam Jensen"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
