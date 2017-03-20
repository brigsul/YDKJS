# You Don't Know Javascript

## Book 2 - Scope and Closures
### Chapter 2 - Lexical Scope

#### Lex-Time

The lexing process examines a string of source code characters and assigns semantic meaning to the tokens as a result of stateful parsing.

Lexical scope is scope that is defined at lexing time.  

Lexical scope is based on where variables and blocks of scope are authored, by you, at write time, and thus (mostly) set in stone by the time the lexer processes your code.

Scope look-up stops once it finds the first match.

Global variables are also automatically properties of the global object (window in browsers), so it is possible to reference a global variable not directly by its lexical name, but instead indirectly as a property reference of the global object ( window.a )


#### Cheating Lexical

##### eval

The eval(..) function takes a string as an argument, and treats the content as if it had been authored code at that point in the program.

When used in strict-mode, eval(..) operates in its own lexical scope, which mean declarations inside of eval() do not actually modify the enclosing scope.


##### with

Deprecated feature which cheats lexical scope.

with is a short-hand for making multiple property references against an object without repeating the object reference itself each time.

The with statement takes an object, and treats that object as if it is a wholly separate lexical scope.

##### Performance

Both eval(..) and with cheat the lexical scope by modifying or creating new lexical scope at runtime.

The Javascript Engine has a number of performance optimizations that it performs during the compilation phase.

If the Engine finds an eval(..) or with in the code, it essentially has to assume that all its awareness of identifier location may be invalid, because it cannot know at lexing time exactly what code you may pass.

Your code will almost certainly tend to run slower simply by including eval(..) or with anywhere in the code.

