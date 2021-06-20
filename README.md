# Brolang

Brolang is a domain-specific language specialized towards generating and sharing strength training programs. This project is in its infancy; features will be documented as they are completed.

Brolang is implemented in [Go](https://golang.org/). Syntax is heavily influenced by [SQL](https://en.wikipedia.org/wiki/SQL) and Go.

## Design goals

* Readability and accessibility: Brolang is meant to be used with very little prerequisite knowledge or study. It reads like plain English. You should be able to write programs in Brolang as if you were writing in your own training journal.
* Ease of sharing: Many coaches and athletes alike write programs to be shared with other people.
  * Brolang natively offers the ability to export to commonly used "self-service" formats within the strength training community, like:
    * Spreadsheets
    * CSV
  * ... as well as human-readable formats:
    * Markdown
    * PDF
  * ... and machine-readable formats:
    * JSON

For more details, see `/docs`.
