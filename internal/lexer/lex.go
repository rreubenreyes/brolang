package lexer

import "fmt"

const (
	dfault             = "default"
	stringLiteral      = "string literal"
	blockStringLiteral = "block string literal"
	numericLiteral     = "numeric literal"
)

type Lexer struct {
	program []byte
}

type context struct {
	value string `default:"default"`
}

func New(program []byte) *Lexer {
	return &Lexer{program: program}
}

func (l *Lexer) Lex() (tokens []token) {
	// ctx := context{}
	for _, char := range l.program {
		fmt.Println(string(char))
	}

	return
}
