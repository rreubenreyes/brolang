/*******************/
/* Base Definition */
/*******************/
enum Species {
    Keyword = '@@brolang_keyword',
    Literal = '@@brolang_literal',
    Operator ='@@brolang_operator'
}

type GrammarPredicate = (expr: string) => boolean;

type Token = {
    readonly name: string;
    readonly species: Species;
    readonly predicate: GrammarPredicate;
}

function factory<S extends Species>(species: S) {
    return function tokenFactory<T extends Token>(
        args: Omit<T, 'species'> & { [key: string]: T[keyof T] }
    ) {
        const { name, predicate, ...etc } = args;

        return {
            species,
            name,
            predicate,
            ...etc,
        }
    }
}

const Literal = factory(Species.Literal);
const Keyword = factory(Species.Keyword);
const Operator = factory(Species.Operator);

/************/
/* Literals */
/************/
type Literal = Token & {
    species: Species.Literal;
}

const NUMBER = Literal({
    name: 'number',
    predicate: s => /[0-9]/.test(s),
});

const STRING = Literal({
    name: 'string',
    predicate: s => /^["'].*["']$/.test(s),
});

/************/
/* Keywords */
/************/
type Keyword = Token & {
    readonly species: Species.Keyword;
}

const PROGRAM = Keyword({
    name: 'program',
    predicate: s => /program/i.test(s),
});

const PERIODIZATION = Keyword({
    name: 'periodization',
    predicate: s => /periodization/i.test(s),
});

const PERIOD = Keyword({
    name: 'period',
    predicate: s => /period/i.test(s),
});

const WEEK = Keyword({
    name: 'week',
    predicate: s => /week/i.test(s),
});

const DAY = Keyword({
    name: 'day',
    predicate: s => /day/i.test(s),
})

/*************/
/* Operators */
/*************/
type Operator = Token & {
    readonly species: Species.Operator;
}

enum EnclosingBound {
    Opening = 1,
    Closing = -1,
}

type OpeningBound = Operator & {
    readonly delimiting: EnclosingBound.Opening;
}

type ClosingBound = Operator & {
    readonly species: Species.Operator;
    readonly delimiting: EnclosingBound.Closing;
}

type BoundingPair = {
    readonly opening: OpeningBound;
    readonly closing: ClosingBound;
}

const ARRAY_OPEN: OpeningBound = Operator({
    name: 'array_open',
    predicate: s => /\[/.test(s),
    delimiting: EnclosingBound.Opening
});
