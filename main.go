package main

import (
	"log"
	"os"

	"github.com/rreubenreyes/brolang/internal/lexer"
)

var stderr = log.New(os.Stderr, "", 0)

func main() {
	if len(os.Args) < 2 {
		stderr.Fatalln("Input file required")
	}

	file := os.Args[1]
	program, err := os.ReadFile(file)

	if err != nil {
		stderr.Fatalln("Error opening file")
	}

	l := lexer.New(program)
	l.Lex()
}
