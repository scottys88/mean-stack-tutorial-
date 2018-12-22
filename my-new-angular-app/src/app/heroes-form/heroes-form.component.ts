import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.scss']
})
export class HeroesFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Change'];

  model = new Person(26, 'Scott', this.powers[1], 'The Surgeon');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Person(32, '', '');
  }

  get diagnostic() { return JSON.stringify(this.model ); }

  constructor() { }

  ngOnInit() {

  }




}
