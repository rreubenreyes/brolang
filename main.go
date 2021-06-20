package main

import (
	"fmt"

	"github.com/rreubenreyes/brolang/internal/lexer"
)

func main() {
	fmt.Println("Hello Brolang")

	token := lexer.Token{kind: "test", value: "test"}

	fmt.Println("token")
}
