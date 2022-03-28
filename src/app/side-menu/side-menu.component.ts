import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('upAndDown', [
      state('open', style({
        height: '100px',
      })),
      state('closed', style({
        height: '0px',
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('2s')
      ]),
    ]),
    
    trigger('visibleInvisible', [
      state('visible', style({
        left: '0vw',
      })),
      state('invisible', style({
        left: '100vw',
      })),
      transition('visible => invisible', [
        animate('10s')
      ]),
      transition('invisible => visible', [
        animate('10s')
      ]),
    ]),
  ]
})
export class SideMenuComponent implements OnInit {

  constructor() {}

  public visibility = 'invisible'
  public isOpen = 'closed'
  public isOpen2 = 'closed'
  @Output() closedWithResult = new EventEmitter<string>();


  ngOnInit(): void {
  }

  visibilityState(){
    if (this.visibility === 'invisible') {
      this.visibility = 'visible';
      console.log(this.visibility);
    } else{
      this.visibility = 'invisible';
      console.log(this.visibility);
    }
  }



  opendetails(){
    if (this.isOpen === 'closed') {
      this.isOpen = 'open'
    } else{
      this.isOpen = 'closed'
    }
  }

  opendetails2(){ 
    if (this.isOpen2 === 'closed') {
      this.isOpen2 = 'open'
    } else{
      this.isOpen2 = 'closed'
    }
  }
}
