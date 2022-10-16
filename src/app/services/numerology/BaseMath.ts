export abstract class BaseMath {

    INIT:number = 'a'.charCodeAt(0);

    abstract resultNumber:number;
    protected input:String = '';
    protected shouldPrintPartials: boolean = false;
    protected VOWELS:String[] = ['a', 'e', 'i', 'o', 'u'];
    private commonMasterNumbers = [11, 22];
    private useMasterNumbers:boolean = true;
//    private List<Integer> uncommonMasterNumbers = List.of(18, 33, 44, 55, 66, 77, 108);

    constructor(printPartials:boolean) {
        this.shouldPrintPartials = printPartials;
    }

    public abstract calc():number;

    public abstract getDescription(): String;

    protected printPartials(value:number): void {
        if(!this.shouldPrintPartials) return;
        if(value == 0) console.log(" ");
        else console.log(value + "+");
    }

    protected applyTheosophicalReduction(number:number): number {
        if(number <= 9) {
            return number;
        }
        if(this.useMasterNumbers && this.commonMasterNumbers.includes(number)) {
            return number;
        }
        if(this.shouldPrintPartials)
            console.log("\nReduction of " + number);

        var sumOfDigits = BaseMath.sumDigits(''+number);

        return this.applyTheosophicalReduction(sumOfDigits);
    }

    protected static sumDigits(digitsString:String): number {
        var actualSum = 0;
        for(let digit of digitsString) {
            actualSum += parseInt(digit);
        }
        return actualSum;
    }

    public getNameOf():String {
        return this.constructor.name;
    }

    public calcReduced():number {
        var calcResult = this.calc();
        return this.applyTheosophicalReduction(calcResult);
    }

    public calcAndPrintReduced():number {
        var calcResult = this.calc();
        var resultAfterReduction = this.applyTheosophicalReduction(calcResult);

        this.printFinalResult(resultAfterReduction);

        return resultAfterReduction;
    }

    private printFinalResult(resultAfterReduction:number):void {
        var desc = this.shouldPrintPartials ? this.getDescription() + this.printDescriptionPart(resultAfterReduction): "";
        console.log(`\n[${this.getNameOf()}]\t \t\t\t${resultAfterReduction}\n${desc}`);
    }

    private printDescriptionPart(resultAfterReduction:number):string {
/*         var directory:string = ResultsUtils.getDirectory(resultAfterReduction); */
        return "";
        /*try {
            return String.join("\n",
                    "\nDESCRIPTION:",
                    String.join("", Files.readAllLines(Path.of(directory))),
                    "-------------------------------------------------------------\n"
                );

        } catch (Exception e) {
            throw new DirectoryNotFoundException(resultAfterReduction);
        } */
    }

    public withInput(input: String): BaseMath {
        this.input = input.toLowerCase().trim();
        return this;
    }

    public withMasterNumber(useMasterNumbers: boolean):BaseMath {
        this.useMasterNumbers = useMasterNumbers;
        return this;
    }
}