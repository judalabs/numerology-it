import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";
import { getValue } from "./KaballahTable";

export class Pythagorean extends BaseMath {
    
    public resultNumber: number = 3;
    private static MULTIPLE: number = 9;

    public constructor(person:Person, printPartials: boolean) {
        super(printPartials);
        this.withInput(person.name);
    }

    public calc(): number {
        return this.input.split('')
                .map(e => getValue(e))
                .reduce((a,b) => a + b);

    }

    public getDescription():String {
        return "";
    }
}