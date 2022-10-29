import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Analysis } from './models/analysis';
import { defaultPerson, Person } from './models/person';
import { Result } from './models/results';
import { AnalysisService } from './services/analysis.service';
import { Pythagorean } from './services/numerology/Pythagorean';
import { getValue } from './services/numerology/KaballahTable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  conversions = [
    {
      "fun": getValue,
      "value": "Kaballah"
    },{
    "fun": Pythagorean.getValue,
    "value": "Pythagorean"
  }
];
  radioSelected = this.conversions[0];

  addText: string = "Add";
  people: Person[] = [];
  analysisList: Analysis[] = [];
  initPerson = {
    name: 'Rodrigo Judá Conceição',
    birthDate: '20/11/1992'
  };
  personEdit: Person = defaultPerson(this.initPerson);

  constructor(
    private analysisService: AnalysisService, 
    private http: HttpClient,
    public translate: TranslateService) {
      translate.addLangs(['en', 'pt'])
      translate.setDefaultLang('en');
      translate.use('en');
    }

  public getAnalysisDescription(result: Result) {
      return this.http.get(`./assets/results/pt/${result.resultNumber}`, {responseType: 'text'})
      .subscribe(res => result.description = res);
  }

  ngOnInit(): void {
/*     console.log(    this.translate.instant("ANALYSIS.DESTINY")); */
    this.translate.get('ANALYSIS.DESTINY').subscribe((text:string) => {console.log(text)});
    this.translate.get('analysis.destiny').subscribe((text:string) => {console.log(text)});
    this.analysisService.getAll().subscribe({
      next: (analysisList) => {
        this.analysisList = analysisList;
        analysisList.forEach(a => console.log(a.name))
      },
      error(err) {
        console.log(err);
      }
    })
  }
  
  addThisPerson(): void {
    var actualPerson = this.personEdit;
    this.analysisService.calcIt(actualPerson, this.radioSelected.fun).subscribe({
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

