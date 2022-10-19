import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Analysis } from '../models/analysis';
import { defaultPerson, Person } from '../models/person';
import { Result } from '../models/results';
import { BaseMath } from './numerology/BaseMath';
import { PsychicNumber } from './numerology/PsychicNumber';
import { PersonalYear } from './numerology/PersonalYear';
import { Impression } from './numerology/Impression';
import { Pythagorean } from './numerology/Pythagorean';
import { Motivation } from './numerology/Motivation';
import { Expression } from './numerology/Expression';
import { Destiny } from './numerology/Destiny';
import { Mission } from './numerology/Mission';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor() { }

  getAll(): Observable<Analysis[]> {
    return of(this.getAndConvert(this.toHeader, defaultPerson(), Pythagorean.getValue));
  }

  calcIt(person: Person, toTableConversion: (a: string) => number): Observable<Result[]> {
    return of(this.getAndConvert(this.toCalc, person, toTableConversion));
  }

  private getAndConvert<T>(
    convertFunction: (a: BaseMath) => T,
    person: Person = defaultPerson(),
    toTableConversion: (a: string) => number): T[] {

    return this.getListOfAnalysis(person, toTableConversion)
      .map(convertFunction);
  }

  /* 
    private getResultOfAnalysis(
      person: Person = defaultPerson(), 
      convertFunction: (a: string) => number): Result[] {
      var listOfAnalysis: BaseMath[] = this.getListOfAnalysis(person, convertFunction);
      return listOfAnalysis.map(analysis => this.toCalc(analysis));
    } */

  private toCalc(analysis: BaseMath): Result {
    return {
      analysisId: analysis.resultNumber,
      resultNumber: analysis.calcAndPrintReduced()
    };
  }

  private getListOfAnalysis(person: Person, toTableConversion: (a: string) => number): BaseMath[] {
    var shouldPrintPartials = false;

    var motivation = new Motivation(person, shouldPrintPartials, toTableConversion);
    var impression = new Impression(person, shouldPrintPartials, toTableConversion);
    var expressionValue: number = motivation.calcReduced() + impression.calcReduced();
    var destiny = new Destiny(person, shouldPrintPartials);
    var expression = new Expression(expressionValue, shouldPrintPartials, toTableConversion);

    return [
      motivation,
      impression,
      expression,
      destiny,
      new Mission(destiny.calcReduced() + expression.calcReduced(), shouldPrintPartials),
      new PsychicNumber(person, shouldPrintPartials),
      new PersonalYear(person, shouldPrintPartials),
    ];
  }

  private toHeader(analysis: BaseMath): Analysis {
    return {
      name: analysis.getNameOf(),
      description: analysis.getDescription()
    };
  }
}
