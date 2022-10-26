import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class PsychicNumber extends BaseMath {
    resultNumber: number = 7;

    constructor(person: Person, printPartials: boolean) {
        super(printPartials);
        this.withInput(person.birthDate);
    }

    public calc(): number {
        var day:string = this.input.split("/")[0];
        return Number(day);
    }

    public getDescription(): string {
        return "Número psíquico";
    }

    public override getNameOf(): String {
        return "Número psíquico";
    }
}