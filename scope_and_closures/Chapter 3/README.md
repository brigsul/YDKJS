# You Don't Know Javascript

## Book 2 - Scope and Closures
### Chapter 3 - Function vs. Block Scope

#### Scope From Functions

JavaScript has function-based scope.

Each function you declare creates a bubble for itself, but no other structures create their own scope bubbles (except in some cases).

It doesn't matter where in the scope a declaration appears.


#### Hiding in Plain Scope

Wrapping any arbitrary section of code in a function declaration effectively "hides" the code.

Practically, this creates a new scope bubble around the code in question, meaning you can "hide" variables and functions by enclosing them in the scope of a function.

Benefits to "hiding" variables:

"Principle of Least Privilege" - in the design of software, such as the API for a module/object, you should only expose what is minimally necessary, and "hide" everything else.


Collision Avoidance - avoid uninteded collision between two different identifiers with the same name but different inteded usages.

Likely for variable collision to occur in the global scope.

Multiple libraries loaded into your program can collide with each other if they don't properly hide their internal/private functions and variables.


#### Functions As Scopes

Function declarations "work" but are not necessarily very ideal.

More ideal if the function's name didn't pollute the enclosing scope, and if the function could be automatically called.

By wrapping a function declaration in (..)(), it becomes a function-expression.

The key difference between a function declaration and a function-expression relates to where its name is bound as an identifier.

Function declaration - name of the function is bound in the enclosing scope.

Function expression - name of the function is bound only in the function itself.


##### Anonymous vs Named

Anonymous function - any function with no name identifier.

Function expressions can be anonymous, but function declarations must have a name.

Draw-backs to anonymous functions:


Debugging

No useful name to display in stack traces, used in debugging.


Self-Reference

Function cannot refer to itself for recursion without use of deprecated references.


Self-Documentation

Omit name that is often helpful in providing more readable/understandable code.


##### Invoking Function Expression Immediately

IIFE - Immediately Invoked Function Expression

Can be written as (function foo() { .. })() or (function foo(){ .. }())

Purely stylistic choice.

Can pass in arguments as with all function calls.


#### Blocks As Scopes

While functions are the most commont unit of scope, other units are possible.

Block Scope is a tool to extend the earlier "Principle of Least Exposure", by hiding information in blocks.

JavaScript has no facility for block scope except for the following:


##### with

While its use is frowned upon, it is an example of block scope, in that the scope that is created from the object only exists for the lifetime of that with statement.


##### try/catch

ES3 specified the variable declaration in the catch clause of a try/catch to be block-scoped to the catch block.


##### let

ES6 introduced a new keyword let which sits alongside var as another way to declare variables.

The let keyword attaches the variable declaration to the scope of whatever block its contained it.

Declarations made with let will not hoist to the entire scope of the block they appear in.


###### let Loops

A particular case where let shines is in teh for-loop case.

let in the for-loop header binds i to the for-loop body, and re-binds it to each iteration of the loop, making sure to re-assign the value from the end of the previous loop iteration.


##### const

ES6 also introduces const, which creates a block-scoped variable whose value is fixed.

Any attempt to change a const value at a later time results in an error.

