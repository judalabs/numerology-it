import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";
import { PersonalMonth } from "./PersonalMonth";
import { PersonalYear } from "./PersonalYear";

export class PersonalDay extends BaseMath {
    personalMonth: PersonalYear;
    resultNumber: number = 11;

    constructor(personalYear: PersonalMonth, printPartials: boolean) {
        super(printPartials);
        this.personalMonth = personalYear;
    }

    public calc(): number {
        const actualDay = new Date().getDate();
        return actualDay + this.personalMonth.calcReduced();
    }

    public getDescription(): string {
        return "Dia Pessoal";
    }

    public override getNameOf(): String {
        return "personalDay";
    }
}