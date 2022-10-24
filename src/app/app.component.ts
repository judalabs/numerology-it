import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Analysis } from './models/analysis';
import { defaultPerson, Person } from './models/person';
import { Result } from './models/results';
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

  constructor(private analysisService: AnalysisService, private http: HttpClient) {}

  public getAnalysisDescription(result: Result) {
      return this.http.get(`./assets/results/pt/${result.resultNumber}`, {responseType: 'text'})
      .subscribe(res => result.description = res);
  }

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
        const p = Promise.all(results.map(result => {
          this.getAnalysisDescription(result);
        }));
        p.then(_unused => {
          actualPerson.results = results;
        });
      },
      error(err) {
        console.log(err);
      }
    });
    this.people.push(actualPerson);
    this.personEdit = defaultPerson();
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

