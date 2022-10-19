import { Component, Input, OnInit } from '@angular/core';
import { Analysis } from 'src/app/models/analysis';
import { defaultPerson, Person } from 'src/app/models/person';
import { AnalysisService } from 'src/app/services/analysis.service';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.scss']
})
export class SingleResultComponent implements OnInit {
  @Input("person") person:Person = defaultPerson();
  @Input("analysisList") analysisList: Analysis[] = [];

  constructor(private analysisService :AnalysisService) { }

  ngOnInit(): void {
    this.analysisService.getAll().subscribe({
      next: (analysisList) => {
        this.analysisList = analysisList;
      },
      error(err) {
        console.log(err);
      }
    })
  }

}
