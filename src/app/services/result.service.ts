import { Injectable } from "@angular/core";
import { waitForAsync } from "@angular/core/testing";
import { delay, Observable, of } from "rxjs";
import { Person } from "../models/person";
import { Result } from "../models/results";

@Injectable({
    providedIn: 'root'
})
export class ResultService {

    constructor() {}

    calculateIt(person: Person): Observable<Result[]> {
        return of(this.getDummyData()).pipe(delay(2000));

    }

    private getDummyData(): Result[] {
        return [{
            analysisId: 1,
            resultNumber: 2
        },
        {
            analysisId: 2,
            resultNumber: 9
        }
        ];
    }
}