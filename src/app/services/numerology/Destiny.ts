import { Person } from "src/app/models/person";
import { BaseMath } from "./BaseMath";

export class Destiny extends BaseMath {

    resultNumber: number = 5;

    constructor(person: Person, printPartials: boolean,) {
        super(printPartials);
        this.withInput(person.birthDate);
    }

    public calc(): number {
        if(this.input == null || this.input.length == 0) return 0;
        return this.reducingDownMethod();
    }

    reducingDownMethod(): number {
        var birthParts = this.input.split("/");
        var finalSum: number = 0;
        for(var birthPart of birthParts) {
            var sumBirthPart: number = BaseMath.sumDigits(birthPart);
            finalSum += this.applyTheosophicalReduction(sumBirthPart);
        }
        return finalSum;
    }

    public getDescription(): string {
        return "O número de destino é determinado pela data de nascimento - dia, mês e ano. O destino" +
        " rege a vida do ser humano e indica o seu \"caminho\" evolutivo. Ele orienta as decisões mais" +
        " importantes na vida; aquelas que determinam o que resultará das aplicações dos seus dons" +
        " e talentos nas suas realizações pessoais conforme for a sua vocação. \nO destino é a própria" +
        " construção da vida que cada um escolhe, ou que lhe é destinado por determinação da" +
        " existência e pelas suas necessidades evolutivas. Ele representa a energia cíclica com a qual" +
        " o ser humano se desenvolverá numa determinada etapa da sua existência - uma vida no" +
        " plano físico. A nossa evolução está destinada por inarredável lei cósmica; porquanto" +
        " tentemos nos retardar, chegará o momento que o avanço será por imposição da lei.";
    }

    public override getNameOf(): String {
        return "Destino";
    }
}