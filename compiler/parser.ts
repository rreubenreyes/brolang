import { Tokens } from './lexer';

/* Grab the entire program as a string */
/* Cast string to buffer */
/* Buffer into stream, chunk size = 1 */
/* [upstream feed] -> [token found ? next : again] -> [rule validation] -> [repeat] */
