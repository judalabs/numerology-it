import { Component, Input, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Person, defaultPerson } from 'src/app/models/person';
import { AnalysisService } from 'src/app/services/analysis.service';
import { getValue } from 'src/app/services/numerology/KaballahTable';
import { Analysis } from '../../models/analysis';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.scss']
})
export class TableResultComponent implements OnInit {
  @Input("people") people: Person[] = [];
  @Input("analysisList") analysisList: Analysis[] = [];
  text = `Quem nasce sob a influência do número 2 possui total equilíbrio, prosperidade e harmonização. É uma pessoa que tem uma natureza de muita intuição, sensibilidade, poder, adaptabilidade, pacificidade e o espírito livre.\n
  São pessoas gentis, sociáveis, que adoram estar cercado dos amigos e dos familiares. São considerados “bonzinhos”.
  Mas aí vai um alerta: cuidado para não virar “capacho”! Não deixe que os outros se aproveitem da sua atitude de querer sempre ajudar.
  Também é preciso tomar cuidado com o excesso de timidez, de serventia e da depreciação de si mesmo e das suas capacidades profissionais. Mais confiança é essencial!`;
  initPerson = {
    name: 'Rodrigo Judá Conceição',
    birthDate: '20/11/1992'
  };
  personEdit: Person = defaultPerson(this.initPerson);

  constructor(
    private analysisService: AnalysisService) { }

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

/*   addThisPerson(): void {
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
  } */
}
