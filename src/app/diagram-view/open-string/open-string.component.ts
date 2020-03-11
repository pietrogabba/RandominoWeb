import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-open-string',
  templateUrl: './open-string.component.html',
  styleUrls: ['./open-string.component.scss']
})
export class OpenStringComponent implements OnInit {
  @Input() note: string;
  @Input() active: boolean;
  color: string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  setActive(isTonic: boolean){
    this.active = true;
    this.color = (isTonic)?'blue':'red';
  }

  setInactive(){
    this.active = false;
  }
}
