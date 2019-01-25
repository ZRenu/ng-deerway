import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls: ['./enter-leave.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class EnterLeaveComponent implements OnInit {
  heroes = [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: 'JavaScript'
    },
    {
      id: 3,
      name: 'Html'
    },
    {
      id: 4,
      name: 'CSS'
    },
  ];
  constructor() { }
  @Output() remove = new EventEmitter<number>();
  ngOnInit() {
  }
  removeHero(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}
