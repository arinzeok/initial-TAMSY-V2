import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.scss']
})
export class BlueButtonComponent implements OnInit {
  @Input() btnType: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
