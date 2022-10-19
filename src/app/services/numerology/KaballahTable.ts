export const KaballahTable = {

    ZERO: {value:0, chars: [' ']},
    ONE: {value:1, chars: ['a', 'i', 'q', 'j', 'y']},
    TWO: {value:2, chars: ['b', 'k', 'r', '́', '̀']},
    THREE: {value:3, chars: ['c', 'g', 'l', 's', '̃', '̧']},
    FOUR: {value:4, chars: ['d', 'm', 't']},
    FIVE: {value:5, chars: ['e', 'h', 'n']},
    SIX: {value:6, chars: ['u', 'v', 'w', 'x']},
    SEVEN: {value:7, chars: ['o', 'z', '̂', '^']},
    EIGHT: {value:8, chars: ['f', 'p']}
};

export function getValue(letter: string): number {
    for(var y of Object.entries(KaballahTable)) {
        if(y[1].chars.find(e => e == letter)) {
            return y[1].value;
        }
    }
    return 0;
}