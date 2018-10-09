import { Component, OnInit } from '@angular/core';
// import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Wind',
  // };
  selectedHero: Hero;
  heroes: Hero[];
  onSelect(her: Hero): void {
    this.selectedHero = her;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
                  .subscribe(heroee => this.heroes = heroee);
  }
  constructor(private heroService: HeroService) { }
  Connstructor() { }
  ngOnInit() {
    this.getHeroes();
  }
}
