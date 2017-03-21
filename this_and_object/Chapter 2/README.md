# You Don't Know Javascript
## this & Object Prototypes
### Chapter 1 : this or That?

#### Call-site

call-site: the location in code where a function is called (not where it's declared).

Certain coding patterns can obscure the true call-site.

call-stack: the stack of functions that have been called to get us to the current moment in execution.

You can visualize a call-stack in your mind by looking at the chain of functions calls in order, but this is painstaking and error-prone.

Most modern desktop browsers have built-in tools for JS debugging, so if you're trying to diagnose this binding, use the developer tools to get the call-stack, then find the second item from the top.


#### Nothing But Rules

Figuring out how the call-site determines where this will point during the execution of a function requires us to compare it to following 4 rules that can apply:


##### Default Binding

The most common case of function calls, standalone function invocation.

Think of this this rule as the default rule when no other rules apply.

Default Binding - this is bound to the location of the function's call-site.

The global scope object is only eligible for the default binding if the contents of the function calling this are not running in strict mode.

Intentionally mixing strict mode and non-strict mode together in your own code is generally frowned upon.


##### Implicit Binding

Must consider whether the call-site has a context object (owning/containing object).

If a function using this is preceded by an object reference, this will refer to that object.

Only the top/last level of an object property reference chain matters to the call-site.


###### Implicitly Lost

One of the most common frustrations that this binding creates is when an implicitly bound function loses that binding and reverts back to default binding.


##### Explicit Binding

Using utilities available to them via their Prototype, functions have access to call(..) and apply(..) methods.

Theses methods take an object to use as this as their first parameter, and then invoke the function with that this specified.


####### Hard Binding

Hard Binding is a variation pattern around explicit binding that prevents a function from losing its intended this binding or having it overwritten by a framework.

The most typical way to wrap a function with a hard binding creates a pass-thru of any arguments passed and any return value received.

Since hard binding is a such a common pattern, its provided as of ES5, using Function.prototype.bind.

bind(..) returns a new function that is hard-coded to call the original function with the this context set as you specified.

As of ES6, the hard-bound function produced by bind(..) has a .name property that derives from the original target function.

Example: bar = foo.bind(..) should have a bar.name value of "bound foo".

###### API Call Contexts

Many libraries' functions, and many of the new built-in functions in JS provide an optional parameter, call "context".

Designed as work-around so you don't have to use bind(..).


##### new Binding

