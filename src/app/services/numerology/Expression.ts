import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class Expression extends BaseMath {

    private lastIsVowel: boolean = false;
    convertIt: (v: string)=> number;
    resultNumber: number = 3;
    resultExpression: number;

    constructor(resultExpression:number, printPartials: boolean, convertIt: (v: string)=> number) {
        super(printPartials);
        this.convertIt = convertIt;
        this.resultExpression = resultExpression;
    }

    public calc(): number {
        return this.resultExpression;
    }

    public getDescription(): string {
        return "expression.description";
    }

    public override getNameOf(): String {
        return "expression.name";
    }
}