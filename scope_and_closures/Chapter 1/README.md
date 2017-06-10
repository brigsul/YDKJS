# You Don't Know Javascript

## Book 2 - Scope and Closures
### Chapter 1 - What is Scope?

#### Compiling/Transpiling

Javascript falls under the category of an "interpreted" language, but is also compiled.

Javascript compilation happens mere microseconds before the code is executed, unlike other languages that can be compiled in a build step ahead of time.

#### Understanding Scope

Engine: Responsible for start-to-finish compilation and execution of the program.


Compiler: Handles parsing and code-generation.


Scope: Collects and maitains look-up list of all declared identifiers (variables), and enforces strict set of rules as to how they can be accessed by the currently executing code.


##### LHS/RHS Look-ups

LHS - done when a variable appears on the left-hand side of an assignment operator.  Look-up is trying to find the variable container itself, so it can assign a value.


RHS - done when a variable appears on the right-hand side of an assignment operator.  Look-up is trying to find the value of some variable.


#### Quiz - Engine-Scope Conversation

Interpret the following code snippet as a conversation about LHS/RHS look-ups between the Engine and Scope:

function foo(a) {
    var b = a;
    return a + b;
}

var c = foo( 2 );

3 LHS Look-ups

4 RHS Look-ups

##### My Answer

Engine: Hey Scope! I have a LHS look-up for c, ever heard of it? 1

Scope: Why yes, Compiler just declared it. It's a variable representation of the expression "foo( 2 )".

Engine: Great thanks! Hey Scope, I have a RHS look-up for foo, ever heard of it? 1

Scope: Oh Sure, Compiler declared it right before he declared c. Its a function. Here.

Engine: Thanks! Executing foo.

Engine: Scope! I have a LHS look-up for a, ever heard of it? 2

Scope: Yup, that's the formal parameter Compiler declared for foo.

Engine: Awesome! I'm going to make that a 2.

Engine: You still there Scope? I need a LHS look-up for b, ever heard of it? 3

Scope: Still here boss. Compiler declared b as a variable inside foo.

Enginge: RHS look-up for b 2

Scope: a

Engine: RHS look-up for a 3

Scope: 2

Engine: RHS look-up for b 4

Engine: Returning 2 + 2 //4


#### Nested Scope

Just as a block or function is nested inside another block or function, scopes are nested inside other scopes.

If a variable cannot be found in the immediate scope, Engine consults the next outer containing scope, continuing until found or  until the outermost (aka, global) scope has been reached.


#### Errors

Why does it matter whether we call it LHS or RHS?

The two types of look-ups behave differently in the circumstance where the variable has not yet been declared.

If an RHS look-up fails, it results in a ReferenceError being thrown by the Engine.

By contrast, if an LHS look-up arrives at the global Scope without finding its target, and if the program is not running in "Strict Mode", then the global Scope will create a new variable of that name in the global scope.

"Strict Mode", (added in ES5), has a number of different behaviors from normal mode.  One behavior is it disallows the implicit golbal variable creation.

If a variable is found for an RHS look-up but you try to do something with its value that is impossible, the Engine throws a TypeError.


#### TL;DR

Scope is the set of rules that determines where and how a variable (identifier) can be looked-up.

LHS - assigning a variable

RHS - retreiving a value

Scope-related assignments can occur either with the = operator or by passing arguments to (assign to) function parameters.

The Javascript Engine compiles code before it executes.

Reference look-ups start at the currently executing Scope, and if need be, work their way up the nested Scope, looking for the identifier.

Unfulfilled RHS references - ReferenceError

Unfulfilled LHS references - implicitly-created global variable (if not in "Strict Mode") or ReferenceError(in in "Strict Mode").

