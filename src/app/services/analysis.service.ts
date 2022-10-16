import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Analysis } from '../models/analysis';
import { defaultPerson, Person } from '../models/person';
import { Result } from '../models/results';
import { BaseMath } from './numerology/BaseMath';
import { PsychicNumber } from './numerology/PsychicNumber';
import { PersonalYear } from './numerology/PersonalYear';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor() { }

  getAll(): Observable<Analysis[]> {
    return of(this.getAndConvert(this.toHeader));
  }

  calcIt(person:Person): Observable<Result[]> {
    return of(this.getAndConvert(this.toCalc, person));
  }

  private getAndConvert<T>(convertFunction: (a: BaseMath) => T, person: Person = defaultPerson()): T[] {
    return this.getListOfAnalysis(person)
      .map(convertFunction);
  }

  private getResultOfAnalysis(person: Person = defaultPerson()): Result[] {
    var listOfAnalysis: BaseMath[] = this.getListOfAnalysis(person);
    return listOfAnalysis.map(analysis => this.toCalc(analysis));
  }

  private toCalc(analysis: BaseMath): Result {
    return {
      analysisId: analysis.resultNumber,
      resultNumber: analysis.calcAndPrintReduced()
    };
  }

  private getListOfAnalysis(person: Person): BaseMath[] {
    var shouldPrintPartials = false;
    return [
      new PsychicNumber(person, shouldPrintPartials),
      new PersonalYear(person, shouldPrintPartials)

    ];
  }

  private toHeader(analysis: BaseMath): Analysis {
    return {
      name: analysis.getNameOf(),
      description: analysis.getDescription()
    };
  }
}
