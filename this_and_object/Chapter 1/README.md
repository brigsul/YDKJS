# You Don't Know Javascript
## this & Object Prototypes
### Chapter 1 : this or That?

this - special identifier keyword that's automatically defined in the scope of every function.

#### Why this?

The this mechanism provides a more elegant way of implicitly "passing along" an object reference.

Leads to cleaner API design and easier to re-use.

##### Confusions

###### Itself

this does not refer to the function itself.

this doesn't let a function get a reference to itself.

Can use call(..) method to force this to actually point at a specific function object.


###### Its Scope

this does not refer to the function's lexical scope.

You cannot bridge between the lexical scopes of two functions using this.


#### What's this?

this is not an author-time binding, but a runtime-binding.

this binding has to do with the manner in which the function is called.

When a function is invoked, an activation record aka execution context, is created.

The record knows where the function was called from, how the function was invoked, what parameters were passed, etc.

One of the records is the this reference to be used for the duration of that function's execution.



