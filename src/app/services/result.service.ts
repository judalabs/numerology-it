import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Person } from "../models/person";
import { Result } from "../models/results";

@Injectable({
    providedIn: 'root'
})
export class ResultService {

    constructor() {}

    calculateIt(person: Person): Observable<Result[]> {
        return of(
            [{
                analysisId: 1,
                resultNumber: 2
            },
            {
                analysisId: 2,
                resultNumber: 9
            }
        ]
        );
    }
}