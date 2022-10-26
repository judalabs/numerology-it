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
        return "O número de Impressão descreve a personalidade em seu aspecto externo, o ego, ou seja, a" +
        " aparência da personalidade atual. É o número que descreve aquela primeira impressão que" +
        " a pessoa causa quando é vista por outro. Nem sempre essa primeira impressão é coerente" +
        " com a atitude interior da pessoa. Essa aparente divergência, no entanto, não reflete" +
        " distorção da personalidade e sim apenas um engano de quem se deixa levar pelas" +
        " aparências e não busca conhecer a essência da pessoa.";
    }

    private isConsonant(letter: String): boolean {
        if(' ' == letter) {
            this.lastIsVowel = true;
            return true;
        }
        for(var vowel of BaseMath.VOWELS) {
            if(vowel == letter) {
                this.lastIsVowel = true;
                return false;
            }
        }
        if(this.lastIsVowel && !letter.match("[a-z]")) {
            return false;
        }
        this.lastIsVowel = false;
        return true;
    }

    public override getNameOf(): String {
        return "Expressão";
    }
}