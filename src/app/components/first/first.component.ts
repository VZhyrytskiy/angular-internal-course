import { Component, OnInit } from '@angular/core';

export enum ECategory {
  category1 ,
  category2,
  category3
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name = 'first-component';
  description = 'description';
  price = 100;
  isAvailable = false;
  category = ECategory

  constructor() { }

  ngOnInit(): void {
  }

}
