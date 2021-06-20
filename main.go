package main

import (
	"fmt"

	"github.com/rreubenreyes/brolang/internal/lexer"
)

func main() {
	fmt.Println("Hello Brolang")

	keyword := lexer.Keyword("if")
	identifier := lexer.Identifier("foo")
	operator := lexer.Operator("+")
	literal := lexer.Literal("2")

	fmt.Println(keyword)
	fmt.Println(identifier)
	fmt.Println(operator)
	fmt.Println(literal)
}
