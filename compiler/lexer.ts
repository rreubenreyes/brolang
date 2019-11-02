/*******************/
/* Base Definition */
/*******************/
enum Species {
    Keyword,
    Literal,
    Operator,
}

type TokenPredicate = (expr: string) => boolean;

type Token = {
    readonly name: string;
    readonly species: Species;
    readonly predicate: TokenPredicate;
}

/* FIXME: This implementation depends on non-null assertions inside the factory. Find a better way */
/* FIXME: How can I change this so that Factory<T> optionally returns T or an intersection with T? */
type Factory<T> = (opts: Partial<T> & { [key: string]: any }) => T;

/************/
/* Literals */
/************/
type Literal = Token & {
    species: Species.Literal;
}

const Literal: Factory<Literal> = ({ name, predicate }) => ({
    species: Species.Literal,
    name: name!, // FIXME
    predicate: predicate! // FIXME
})

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

const Keyword: Factory<Keyword> = ({ name, predicate }) => ({
    species: Species.Keyword,
    name: name!, // FIXME
    predicate: predicate!, // FIXME
})

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

const Operator: Factory<Operator> = ({ name, predicate, ...etc }) => ({
    species: Species.Operator,
    name: name!, // FIXME
    predicate: predicate!, // FIXME
    ...etc,
})

/* FIXME: Optional intersection with Operator? See note in Factory */
// const ARRAY_OPEN: OpeningBound = Operator({
//     name: 'array_open',
//     predicate: s => /\[/.test(s),
//     delimiting: EnclosingBound.Opening,
// });
