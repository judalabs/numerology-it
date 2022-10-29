import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class Mission extends BaseMath {

    resultNumber: number = 6;
    resultExpression: number;

    constructor(resultExpression:number, printPartials: boolean) {
        super(printPartials);
        this.resultExpression = resultExpression;
    }

    public calc(): number {
        return this.resultExpression;
    }

    public getDescription(): string {
        return "mission.description";
    }
    
    public override getNameOf(): String {
        return "mission.name";
    }
}