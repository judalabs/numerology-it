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
        return "O número de Motivação descreve os motivos e as razões que movem" +
        " as atitudes do ser humano e o seu modo de proceder. Esse número" +
        " revela o aspecto interior da personalidade, da alma, que se reflete em" +
        " suas atitudes e comportamentos, principalmente na intimidade e no lar," +
        " influenciando ainda nas escolhas pessoais. \n" + 
        " Nem sempre há coerência, pois, a atitude interior da pessoa muitas" + 
        " vezes não é revelada para as outras pessoas, mas rege as suas decisões" +
        " intuitivas. O número de Motivação revela as crenças e os valores " + 
        " íntimos que norteiam a vida da pessoa mobilizando seus desejos e suas" +
        " ambições, e os sentimentos mais íntimos que impulsionam o ser humano a" +
        " buscar determinados caminhos para as suas realizações na vida.";
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
        return "motivation";
    }
}