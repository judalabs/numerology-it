import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class Impression extends BaseMath {

    private lastIsVowel: boolean = false;
    convertIt: (v: string)=> number;
    resultNumber: number = 1;

    constructor(person: Person, printPartials: boolean, convertIt: (v: string)=> number) {
        super(printPartials);
        this.withInput(person.name);
        this.convertIt = convertIt;
    }

    public calc(): number {
        return this.input.normalize('NFD').split('')
            .filter(e => this.isConsonant(e))
            .map(this.convertIt)
            .reduce((a,b) => a + b, 0);
    }

    public getDescription(): string {
        return "impression.description";
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
        return "impression.name";
    }
}