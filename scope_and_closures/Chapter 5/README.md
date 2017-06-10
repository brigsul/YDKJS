# You Don't Know Javascript

## Book 2 - Scope and Closures
### Chapter 5 - Scope Closure

#### Enlightenment

Closure is all around you in JavaScript, you just have to recognize and embrace it.

Closures are already occurring all over your code.

#### Nitty Gritty

Closure is when a function is able to remember and acces its lexical scope even when that function is executing outside its lexical scope.

Closure lets the function continue to acces the lexical scope it was defined in at author-time.

Any of the various ways functions can be passed around as values, or invoked in other locations, are all examples of observing/exercising closure.

Whatever facility we use to transport an inner function outside of its lexical scope, it will maintain a scope reference to where it was originally declared, and wherever we execute it, that closure will be exercised.


#### Now I Can See

Whenever and wherever you treat functions as values and pass them around, you are likely to see those functions exercising closure.

The IIFE pattern is not strictly an observation of closure because it is not executed outside its lexical scope.

While closure might technically be happening at declaration time, it is not strictly observable.

Though IIFE is not itself and example of closure, it creates scope, which can be closed over.


#### Loops + Closure

The way scope works, variables defined in for loops are all closed over the same shared global space.

In order to create a separate iteration of i for each for loop, you must pass the value of i into a separate scope (like an IIFE) that can store a value each time the loop runs.


##### Block Scoping Revisited

An alternative to the complicated use of an IIFE to create scope on a per-iteration basis is to use let.

let essentially turns a block into a scope that we can close over.

There is a special behavior defined for let declarations used in the head of a for-loop that says the variable will be declared for each iteration.


#### Modules

Modules are another code pattern that leverage the power of closure without appearing to.

The most common way of implementing the module pattern is often called "Revealing Module".

Two requirements for the module pattern to be exercised:

1. There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module instance).

2. The enclosing function must return back at least one inner function, so that this inner function has closure over the private scope, and can acces and/or modify that private state.

Modules can be turned into IIFEs and be invoked immediately in the same way.

ES6 adds first-class syntax support for modules.  

When loaded via the module system, ES6 treats a file as a separate module.

Each module can both import and export public API members.

ES6 modules do not have an "inline" format, and must be defined in separate files.

import imports one or more members from a module's API into the current scope, each to a bound variable.

module imports an entire module API to a bound variable.

export exports an identifier (variable, function) to the public API for the current module.

The contents inside the module file are treated as if encloed in a scope closure.