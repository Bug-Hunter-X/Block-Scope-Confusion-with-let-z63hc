# Block Scope Confusion with `let` in JavaScript

This example demonstrates a common source of confusion for developers new to JavaScript's block scope using the `let` keyword.  The code appears straightforward, but the output might be unexpected if you're not aware of how `let` creates block-scoped variables.

## The Problem

The `let` keyword in JavaScript creates a variable that is only accessible within the block of code where it's defined (enclosed in curly braces `{}`).  This is different from `var`, which has function scope.

## How to Solve It

The solution is to understand and utilize block scoping correctly. If you intend to modify a variable declared outside the block, you must not redeclare it with `let` inside the block. Use the same variable name without `let`. If you need a separate variable in the inner block, use a different name.