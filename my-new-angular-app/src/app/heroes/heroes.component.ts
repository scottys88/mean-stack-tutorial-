import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  doubleClick: Hero;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    if (this.selectedHero !== hero) {
      this.selectedHero = hero;
    } else {
      this.doubleClick = hero;
    }
}



  constructor() { }

  ngOnInit() {
  }

}
