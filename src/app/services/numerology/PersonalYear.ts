import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class PersonalYear extends BaseMath {
    resultNumber: number = 8;

    constructor(person: Person, printPartials: boolean) {
        super(printPartials);
        this.withInput(person.birthDate);
    }

    public calc(): number {
        var day: string = this.input.split("/")[0];
        var month: string = this.input.split("/")[1];
        return Number(day) + Number(month);
    }

    public getDescription(): string {
        return "Ano Pessoal";
    }
}