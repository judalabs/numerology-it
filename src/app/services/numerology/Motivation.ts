import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class Motivation extends BaseMath {

    private lastIsVowel: boolean = false;
    convertIt: (v: string) => number;
    resultNumber: number = 2;

    constructor(person: Person, printPartials: boolean, convertIt: (v: string)=> number) {
        super(printPartials);
        this.withInput(person.name);
        this.convertIt = convertIt;
    }

    public calc(): number {
        return this.input.normalize('NFD').split('')
            .filter(e => this.isVowel(e))
            .map(this.convertIt)
            .reduce((a,b) => a + b, 0);
    }

    public getDescription(): string {
        return "motivation.description";
    }

    private isVowel(letter: String): boolean {
        if(' ' == letter) {
            this.lastIsVowel = false;
            return true;
        }
        for(var vowel of BaseMath.VOWELS) {
            if(vowel == letter) {
                this.lastIsVowel = true;
                return true;
            }
        }
        const isAccent = !letter.match("[a-z]");
        this.lastIsVowel = this.lastIsVowel && isAccent;
        return this.lastIsVowel;
    }

    public override getNameOf(): String {
        return "motivation.name";
    }
}