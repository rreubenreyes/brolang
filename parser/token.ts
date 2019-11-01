enum TokenSpecies {
}

enum TokenBoundary {
    Opening = 1,
    Closing = -1,
    SelfContained = 0,
}

type Token = {
    kind: TokenSpecies;
    delimiting: TokenBoundary;
    children: Token[];
}
