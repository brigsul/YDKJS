# You Don't Know Javascript

## Book 2 - Scope and Closures
### Chapter 4 - Hoisting

#### Chicken or Egg?

JavaScript is mostly interpreted line-by-line, top-down in order, as the program executes, but there are exceptions.


#### The Compiler Strikes Again

The JavaScript Engine compiles your code before it interprets it.

Part of compilation is to find and associate all declarations with their appropriate scopes.

These declarations are "hoisted" to the top of the interpreted code.

Declarations are processed during the compilation phase and "hoisted".

Assignments are left in place for the execution phase.

Hoisting is per-scope.  

Function declarations are hoisted, but function expressions are not.


#### Functions First

Both function declarations and variable declarations are hoisted, but functions are hoisted first.


#### TL;DR

There are compiler-phase tasks and execution-phase tasks.

Part of compilation-phase is processing all declarations in a scope, regardless of where they appear, before execution.

Declarations are hoisted, but assignments (even function assingments and function expressions) are not.

Duplicate declarations are dangerous.  Especially if you mix function and variable declarations.

