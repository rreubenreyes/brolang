type Grammar = {
    readonly [key: string]: RegExp;
}

export const Tokens: Grammar = {
    NEWLINE: /\r\n|\r|\n/,
    WHITESPACE: /\s+/,
    HEADING: /program|periodization|period|(week|day|#)\s+\d/i,
    SET_ID: /amrap|d|time|emom|interval|rest|w+/i,
    SET_DEF: /assisted|x|+|weighted|t|min|sec|m|s/i,
    SET_MOD: /%|rpe|rm/i,
    SET_EQPMOD: /bands|barbell|cables|chains|dumbbell|kettlebell|machine|straps|kb|db|bb/i,
    QUOT: /"/,
    INT_LIT: /\d/,
    L_PAREN: /(/,
    R_PAREN: /)/,
    L_SQBRACE: /\[/,
    R_SQBRACE: /\]/,
    L_CBRACE: /\{/,
    R_CBRACE: /\}/,
}


