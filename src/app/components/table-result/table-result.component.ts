import { Component, OnInit } from '@angular/core';
import { Person, defaultPerson } from 'src/app/models/person';
import { AnalysisService } from 'src/app/services/analysis.service';
import { Analysis } from '../../models/analysis';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.scss']
})
export class TableResultComponent implements OnInit {
  people: Person[] = [];
  analysisList: Analysis[] = [];
  initPerson = {
    name: 'Rodrigo',
    birthDate: '20/11/1992'
  };
  personEdit: Person = defaultPerson(this.initPerson);

  constructor(
    private analysisService: AnalysisService) { }

  ngOnInit(): void {
    this.analysisService.getAll().subscribe({
      next: (analysisList) => {
        this.analysisList = analysisList;
      }
    });
  }

  addThisPerson(): void {
    var actualPerson = this.personEdit;
    this.analysisService.calcIt(actualPerson).subscribe({
      next: (results) => {
        actualPerson.results = results;
      }
    });
    this.people.push(actualPerson);
    this.personEdit = defaultPerson(this.initPerson);
  }
}
