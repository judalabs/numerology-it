import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class Destiny extends BaseMath {

    resultNumber: number = 5;

    constructor(person: Person, printPartials: boolean,) {
        super(printPartials);
        this.withInput(person.birthDate);
    }

    public calc(): number {
        if(this.input == null || this.input.length == 0) return 0;
        return this.reducingDownMethod();
    }

    reducingDownMethod(): number {
        var birthParts = this.input.split("/");
        var finalSum: number = 0;
        for(var birthPart of birthParts) {
            var sumBirthPart: number = BaseMath.sumDigits(birthPart);
            finalSum += this.applyTheosophicalReduction(sumBirthPart);
        }
        return finalSum;
    }

    public getDescription(): string {
        return "destiny.description";
    }

    public override getNameOf(): String {
        return "destiny.name";
    }
}