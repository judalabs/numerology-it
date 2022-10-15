import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Analysis } from '../models/analysis';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor() { }
  getAll(): Observable<Analysis[]> {
    return of(this.getDummyData()).pipe(delay(2000));
  }

  private getDummyData(): Analysis[] {
    return [
      {
        name: 'analName1',
        description: 'desc1'
      },
      {
        name: 'analName2',
        description: 'desc2'
      }
    ];
  }
}
