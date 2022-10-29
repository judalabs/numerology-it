import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";
import { PersonalYear } from "./PersonalYear";

export class PersonalMonth extends BaseMath {
    personalYear: PersonalYear;
    resultNumber: number = 8;

    constructor(personalYear: PersonalYear, printPartials: boolean) {
        super(printPartials);
        this.personalYear = personalYear;
    }

    public calc(): number {
        const actualMonth = new Date().getMonth() + 1;
        return actualMonth + this.personalYear.calcReduced();
    }

    public getDescription(): string {
        return "Mês Pessoal";
    }

    public override getNameOf(): String {
        return "personalMonth";
    }
}