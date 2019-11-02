/*************************/
/* Base Token Definition */
/*************************/
type GrammarPredicate = (expr: string) => boolean;

type Token = {
    readonly name: string;
    readonly predicate: GrammarPredicate;
}

/**********************/
/* Literal Definition */
/**********************/
type Literal = Token & {
    readonly compilesTo: 'number' | 'string';
}

/********************/
/* Block Definition */
/********************/
enum EnclosingBound {
    Opening = 1,
    Closing = -1,
}

type OpeningBound = Token & {
    readonly delimiting: EnclosingBound.Opening;
}

type ClosingBound = Token & {
    readonly delimiting: EnclosingBound.Closing;
}

type Block = {
    readonly opening: OpeningBound;
    readonly closing: ClosingBound;
}

/***********************/
/* Operator Definition */
/***********************/
// type UnaryOperator = Token & {
//     readonly operands: (t: Token) => any;
// }

type BinaryOperator = Token & {
    eval<T extends Token>(a: T, b: T): any;
}

type TernaryOperator = Token & {
    eval<T extends Token>(
        a: T,
        b: T,
        c: T,
    ): any;
}

/**********************/
/* Keyword Definition */
/**********************/
type Keyword = Token & {
    readonly boundBy?: Block[];
}


/************/
/* Literals */
/************/
const NUMBER: Literal = {
    name: 'number',
    compilesTo: 'number',
    predicate: /[0-9]+/.test,
}

const STRING: Literal = {
    name: 'string',
    compilesTo: 'string',
    predicate: /^["'].*["']$/.test,
};

/**********/
/* Blocks */
/**********/
const ARRAY_OPEN: OpeningBound = {
    name: 'array_open',
    predicate: /\(/.test,
    delimiting: EnclosingBound.Opening
};

const ARRAY_CLOSE: ClosingBound = {
    name: 'array_open',
    predicate: /\)/.test,
    delimiting: EnclosingBound.Closing
};

const ARRAY: Block = {
    opening: ARRAY_OPEN,
    closing: ARRAY_CLOSE,
}

const HEADING_OPEN: OpeningBound = {
    name: 'array_open',
    predicate: /\[/.test,
    delimiting: EnclosingBound.Opening
};

const HEADING_CLOSE: ClosingBound = {
    name: 'array_open',
    predicate: /\]/.test,
    delimiting: EnclosingBound.Closing
};

const HEADING: Block = {
    opening: HEADING_OPEN,
    closing: HEADING_CLOSE,
}

/*************/
/* Operators */
/*************/
// const ASSIGNMENT: BinaryOperator = {
//     name: 'assignment',
//     predicate: /:/.test,
//     eval (a: Keyword, b: Literal) => {
//         return { [a.name]: b }
//     }
// };

/************/
/* Keywords */
/************/
const PROGRAM: Keyword = {
    name: 'program',
    predicate: /program/i.test,
    boundBy: [HEADING],
};

const PERIODIZATION: Keyword = {
    name: 'periodization',
    predicate: /periodization/i.test,
    boundBy: [HEADING],
};

const PERIOD: Keyword = {
    name: 'period',
    predicate: /period/i.test,
    boundBy: [HEADING],
};

const WEEK: Keyword = {
    name: 'week',
    predicate: /week/i.test,
    boundBy: [HEADING],
};

const DAY: Keyword = {
    name: 'day',
    predicate: /day/i.test,
    boundBy: [HEADING],
};
