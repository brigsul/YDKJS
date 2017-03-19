# You Don't Know Javascript

## Book 2 - Scope and Closures
### Chapter 1 - What is Scope?

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

