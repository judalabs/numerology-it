import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Analysis } from 'src/app/models/analysis';
import { defaultPerson, Person } from 'src/app/models/person';
import { AnalysisService } from 'src/app/services/analysis.service';
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
