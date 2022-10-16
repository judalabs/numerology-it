import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class PsychicNumber extends BaseMath {
    resultNumber: number = 1;

    constructor(person: Person, printPartials: boolean) {
        super(printPartials);
        this.withInput(person.birthDate);
    }

    public calc(): number {
        var day:string = this.input.split("/")[0];
        return Number(day);
    }

    public getDescription(): string {
        return "null";
    }
}