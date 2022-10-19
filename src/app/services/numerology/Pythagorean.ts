import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class Pythagorean extends BaseMath {
    public resultNumber: number = 3;
    private static MULTIPLE: number = 9;

    public constructor(person:Person, printPartials: boolean) {
        super(printPartials);
        this.withInput(person.name);
    }

    public calc():number {
        return this.input.split('')
                .map(Pythagorean.getValue)
                .reduce((a,b) => a + b);

    }

    public static getValue(letter:string): number {
        if(letter == ' ' || !letter.match("[a-z]")) return 0;
        return (letter.charCodeAt(0) - BaseMath.INIT) % Pythagorean.MULTIPLE + 1;
    }

    public getDescription():String {
        return "";
    }
}