import { Component, OnInit } from '@angular/core';
import { defaultPerson, Person } from 'src/app/models/person';
import { BaseResultComponent } from '../BaseResultComponent';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.scss']
})
export class SingleResultComponent extends BaseResultComponent implements OnInit {
  person:Person = defaultPerson();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.person = this.people[0];
  }
}
