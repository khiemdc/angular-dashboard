import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styles: [`
  :host {
    display: block;
    padding: 32px;
    border: 1px solid black;
    border-radius: 8px;
    margin-bottom: 3%;
    margin-left: 1.5%;
  }
  .header {
    background-color: #e3e3e3;
  }
  .side {
    background-color: #e3e3ff;
  }
  .content {
    background-color: #e3ffe3;
  }
  .footer {
    background-color: #ffe3e3;
  }
  `]
})
export class CardComponent {
  @Input() header;
  @Input() content;

 
}