import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'; // for aync
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> { // async
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  constructor(public messageService: MessageService) { }
}
