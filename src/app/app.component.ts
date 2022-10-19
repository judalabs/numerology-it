import { Component, OnInit } from '@angular/core';
import { Analysis } from './models/analysis';
import { defaultPerson, Person } from './models/person';
import { AnalysisService } from './services/analysis.service';
import { getValue } from './services/numerology/KaballahTable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  addText: string = "Add";
  people: Person[] = [];
  analysisList: Analysis[] = [];
  initPerson = {
    name: 'Rodrigo Judá Conceição',
    birthDate: '20/11/1992'
  };
  personEdit: Person = defaultPerson(this.initPerson);

  constructor(private analysisService: AnalysisService) {}

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
  
  addThisPerson(): void {
    var actualPerson = this.personEdit;
    this.analysisService.calcIt(actualPerson, getValue).subscribe({
      next: (results) => {
        actualPerson.results = results;
      },
      error(err) {
        console.log(err);
      }
    });
    this.people.push(actualPerson);
    this.personEdit = defaultPerson(this.initPerson);
    this.updateTextMessage();
  }

  updateTextMessage() {
    this.addText = this.people.length ? 'Add to compare' : 'Add';
  }

  deletePersonAt(personIndex:number) {
    this.people.splice(personIndex, 1);
    this.updateTextMessage();
  }
}

