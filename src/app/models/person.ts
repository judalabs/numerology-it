import { Result } from "./results";

export interface Person {
    name: String;
    birthDate: String;
    results: Result[];
}

export function defaultPerson(options?: Partial<Person>): Person {
    const defaults = {
        name: ' ',
        birthDate: '',
        results: []
    };
    return {
        ...defaults,
        ...options
    }
}