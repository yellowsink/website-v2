---
layout: ../layouts/BaseLayout.astro
title: F# ops
---

# How F# ops work

F# is full of funky functional operators. Here's how they all work!

## Pipeline

The pipe operator takes a value on the left and passes it through
the function on the right. The function can be partially applied
due to F# currying and still work.
```fsharp
// declaration
let inline (|>) arg func = func arg
// usage
5 |> printfn "%i"
// equivalent
printfn "%i" 5
```

There is also a double pipe that takes a tuple of two args on the left.
```fsharp
// declaration
let inline (||>) (arg1, arg2) func = func arg1 arg2
// usage
(5, 6) ||> printfn "%i %i"
// equivalent
printfn "%i %i" 5 6
```

And a triple:
```fsharp
// declaration
let inline (|||>) (arg1, arg2, arg3) func = func arg1 arg2 arg3
// usage
(5, 6, 7) |||> printfn "%i %i"
// equivalent
printfn "%i %i %i" 5 6 7
```