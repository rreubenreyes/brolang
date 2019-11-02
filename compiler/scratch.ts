/**
 * Ground rules
 *
 * 1. Case insensitive
 * 2. No weird symbols
 * 3. Accessible to the modern bro
 *
 * Authoring considerations
 *
 * What is the closest language? Python? Markdown? Ruby? SQL?
 *  - Python: simple syntax, readable, indentation dependent - no
 *  - Ruby: same as python but you have to end blocks explicitly - no
 *  - Markdown: Ideal as a markup inspiration but too many symbols - sort of
 *  - SQL: Probably the best language to base this off of tbh - yes
 *  - TOML: Very good as a markup inspiration - yes
 */

/**
 * Sample input - defining an entire program in one block
 *
 * [Program]
 * Name: "Starting Strength"
 * Frequency: 3
 * Units: imperial
 * Author: "Reuben Reyes"
 *
 * [Week 1]
 * [Day 1]
 * Exercise: "Squat"
 * Do: (
 *     W; 45x5,
 *     W; 95x5,
 *     W; 135x5,
 *     W; 155x5,
 *     W; 185x3,
 *     W; 205x1,
 *     225x3x5
 * )
 *
 * Exercise: "Bench Press"
 * Do: (
 *     W; 45x5,
 *     W; 95x5,
 *     W; 115x3,
 *     W; 135x1,
 *     155x3x5
 * )
 */

/* Delimited by square braces */
enum Heading {
    Day = 'day',
    Periodization = 'periodization',
    Period = 'period',
    Program = 'program',
    Week = 'week',
    ExerciseOrder = '',
}

/* Delimited by parentheses, follows ( or , */
enum SetIdentifier {
    Amrap = 'amrap',
    Deload = 'd',
    Duration = 'time',
    EveryMinute = 'emom',
    Interval = 'interval',
    Rest = 'rest',
    Warmup = 'w',
}

/* Follows ; */
enum ExerciseSetDefinition {
    Assisted = 'assisted',
    SetsReps = 'x',
    SetsRepsComplex = '+',
    Weighted = 'weighted',
    TimeStart = 't',
    TimeEndMinute = 'm',
    TimeEndSecond = 's',
}

/* Follows @ */
enum SetModifier {
    Percentage = '%',
    RPE = 'rpe',
    RepMax = 'rm',
}

/* Follows :: */
enum SetEquipmentModifier {
    Bands = 'bands',
    Barbell = 'barbell',
    Cables = 'cables',
    Chains = 'chains',
    Dumbbell = 'dumbbell',
    Kettlebell = 'kettlebell',
    Machine = 'machine',
    Straps = 'straps',
}

/**
 * Sample input of the various rules defined above:
 *
 * [Program]
 * Name: "Starting Strength"
 * Frequency: varying
 * Units: metric
 *
 * [Periodization]
 * BaseUnit: week
 *
 * [Periods]
 * Introduction: 1
 * Volume: 3
 * Deload: 1
 * Intensity: 3
 * Peak: 1
 *
 * [Introduction]
 * [Day 1]
 * [1]
 * Exercise: "Three-Position Snatch"
 * Do: (
 *     W; 20x3,
 *     W; 40x2,
 *     W; 50x2,
 *     W; 60x1,
 *     W; 70x1,
 *     80x4x1,
 * )
 *
 * [2]
 * Complex: (
 *     "Power Clean",
 *     "Front Squat"
 * )
 * Do: (
 *     w; 60x2x1+3,
 *     w; 80x1+3,
 *     w; 90x1+3,
 *     w; 100x1+3,
 *     105x4x1+3,
 * )
 */
