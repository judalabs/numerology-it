import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";
import { getValue } from "./KaballahTable";

export class Kaballah extends BaseMath {
    
    public resultNumber: number = 3;
    private static MULTIPLE: number = 9;

    public constructor(person:Person, printPartials: boolean) {
        super(printPartials);
        this.withInput(person.name);
    }

    public calc(): number {
        return this.input.normalize('NFD').split('')
                .map(e => getValue(e))
                .reduce((a,b) => a + b);

    }

    public getDescription():String {
        return "";
    }

    public override getNameOf(): String {
        return "Kaballah";
    }
}