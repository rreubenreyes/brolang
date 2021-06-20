# Lexical elements

## Comments

Comments serve as notes for the author/readers and/or as program documentation.

Comments start with the character `#` and stop at the end of the line.

(Note: _Block comments_, which start with the character sequence `'''` or `"""` and end with the first subsequent identical character sequence `'''` or `"""`, may also be considered as comments, but are actually interpreted as string literals, as documented below.)

## Tokens

Brolang consists of four types of tokens:

* _Keywords_, words which are reserved and cannot be used as identifiers.
* _Identifiers_, user-defined symbols which can take any name and can be assigned values.
* _Operators_, character sequences which represent operations and punctuation.
* _Literals_, referring to character sequences which represent a value of a specific type in Brolang.

The following character sequences are specially considered in Brolang but are not interpreted as tokens:

* _Whitespace_: Spaces, tabs, carriage returns, and newlines. These are ignored by the interpreter except when they are used in a context in which they form part of an individual token as documented above.

### Keywords

Keywords are case-insensitive. The following are keywords and cannot be used by identifiers:

```
and        as         block     each
else       end        define    for
if         not        of        or
repeat     then       times     with
```

```
MyValue = "value"
```

### Identifiers

Identifiers name program entities; mainly variables. An identifier is a sequence of one or more letters and digits. The first character in an identifier must be a letter.

### Operators

The following are operators and punctuation:

```
+      -      *      /     +=
-=     *=     /=     =     ==
!=     <=     >=     <     >
:      +      "      '     #
(      )      [      ]     =>
```

### Literals

#### Number literals

A number literal is a sequence of digits and possibly decimal points `.` and underscores `_`. Two types exist: _integer literals_ and _floating point literals_.

#### Integer literals

An integer literal is a sequence consisting only of digits and possibly underscores, e.g. `0`, `999`, `1000`, `1_000_000`. Underscores may serve as separators for legibility.

#### Floating point literals

A floating-point literal is a decimal or hexadecimal representation of a floating-point constant, e.g. `1.0`, `999.0`, `123.456`, `0.02`. Underscores may serve as separators for legibility.

#### String literals

A string literal is a string constant representing a literal sequence of characters, e.g. `"hello"`, `"a"`, `"2"`, `"The quick brown fox"`. A string may be delimited by the punctuation characters `'` or `"`, in which case the string may not contain newlines. A string may also be delimited by the character sequence `'''` or `"""`, in which case the string may span multiple lines and may contain any character.

#### Boolean literals

True and false.
