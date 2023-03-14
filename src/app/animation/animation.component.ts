import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { 
  AnimationBuilder, 
  style, 
  transition, 
  trigger,
  state,
  animate } from '@angular/animations';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('upImg', [
      state('in', style({
        width: '40%',
        opacity: 1
      })),
      state('out', style({
        width: '10%',
        opacity: 0
      })),
      transition(':enter', [
        style({ width: '0%', opacity: 0 }),
        animate('0.7s', style({ width: '40%', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ width: '40%', opacity: 1 }),
        animate('0.7s', style({ width: '0%', opacity: 0 }))
      ]),
      transition('in => out', [
        animate('0.7s')
      ]),
      transition('out => in', [
        animate('0.7s')
      ])
    ]),

    trigger('downImg', [
      state('in', style({
        width: '50%',
        opacity: 1
      })),
      state('out', style({
        width: '10%',
        opacity: 0
      })),
      transition(':enter', [
        style({ width: '00%', opacity: 0 }),
        animate('0.7s', style({ width: '50%', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ width: '50%', opacity: 1 }),
        animate('0.7s', style({ width: '0%', opacity: 0 }))
      ]),
      transition('in => out', [
        animate('0.7s')
      ]),
      transition('out => in', [
        animate('0.7s')
      ])
    ]),

    trigger('productImg', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0,
        transform: 'translateX(50%)'
      })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.8s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.8s', style({ opacity: 0 }))
      ]),
      transition('in => out', [
        animate('0.8s')
      ]),
      transition('out => in', [
        animate('0.8s')
      ])
    ]),

  ]

})
export class AnimationComponent implements OnInit, AfterViewInit, OnDestroy {

  indexActive = 0;
  divState = 'out';

  bannerInterval!: Subscription;
  activeInterval!: any;
  
  bannerImages = [
    {
      upPart: '#9747ff',
      downPart: '#04c48b',
      product: 'assets/1.png',
    },
    {
      upPart: '#F5B6CD',
      downPart: '#9063CD',
      product: 'assets/2.png',
    },
    {
      upPart: '#59CBE8',
      downPart: '#F5B6CD',
      product: 'assets/3.png',
    },
    {
      upPart: '#FDDA24',
      downPart: '#59CBE8',
      product: 'assets/4.png',
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.divState = 'in';
  }
  
  ngAfterViewInit(): void {
    this.bannerInterval = interval(3000).subscribe(() => {
      this.resetAnimation();
    });
  }

  resetAnimation(): void {
    this.divState = 'out';
    this.activeInterval = setTimeout(() => { 
      this.divState = 'in'
      this.indexActive = (this.indexActive + 1) % this.bannerImages.length;
    }, 700);
  }

  ngOnDestroy(): void {
    this.bannerInterval.unsubscribe();
    clearTimeout(this.activeInterval);
  }

}
