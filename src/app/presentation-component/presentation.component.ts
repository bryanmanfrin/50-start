import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-component',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  public title = 'Qui sommes-nous?';

  constructor() { }

  ngOnInit() {
  }

}
