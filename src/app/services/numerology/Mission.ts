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
        return "Todos nós temos uma missão e o conhecimento dessas particularidades" + 
        " suavizam a evolução e a nossa experiência de vida. Não conhecer nosso" +
        " propósito e os aspectos que a ele estão associados podem tornar a" +
        " vida muito mais complicada, estagnada e difícil, nos trazendo" +
        " ainda mais os efeitos da Lei do Karma.";
    }
    
    public override getNameOf(): String {
        return "Missão";
    }
}