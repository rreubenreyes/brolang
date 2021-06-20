package lexer

import "fmt"

type token struct {
	kind  string
	value string
}

func (t *token) String() string {
	return fmt.Sprintf("token{kind: %s, value: %s }", t.kind, t.value)
}

func (t *token) Kind() string {
	return t.kind
}

func (t *token) Value() string {
	return t.value
}

func keyword(value string) *token    { return &token{kind: "keyword", value: value} }
func identifier(value string) *token { return &token{kind: "identifier", value: value} }
func operator(value string) *token   { return &token{kind: "operator", value: value} }
func literal(value string) *token    { return &token{kind: "literal", value: value} }
