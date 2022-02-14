---
setup: import MarkdownLoader from "../components/MarkdownLoader.astro"
layout: "../layouts/BaseLayout.astro"
title: Simian
---

# Simian
**Flexible JS monkey-patching simple enough for monkey brains!**

## What does Simian do?
Let's say you have a function in Javascript:
```js
const foo = {
  /* stuff */ bar: (baz) => baz + 1 /* more stuff */
};
```
And you would rather that `foo.bar(...)` add 2 instead of 1, you could use Simian to do this:
```js
import Patcher from "simian";
const patcher = new Patcher();
const unpatch = patcher.after("bar", foo, ([bar], ret) => ret + 2);
// unpatch is a function to undo your patch
```
Or you could increment the argument before it reaches the function:
```js
patcher.before("bar", foo, ([bar]) => [bar + 1]);
```
Or you could just cut out the function entirely:
```js
patcher.instead("bar", foo, ([bar], originalFunc) => bar + 2);
```

## Context
The `this` context value in JS is preserved when you patch a function, making it suitable for, say,
injecting into a running React app's components without breaking hooks.

The `this` value is also available inside your passed patch functions if you pass `function(){}` instead of `() => {}`.

Note that there is no need to pass the correct values to `originalFunc` inside `instead` patches -
you aren't actually passed the original function but rather the function *bound to the correct `this` value*.

This means that you can do:
```js
patcher.instead("func", obj, (args, func) => func(...args));
```
without breaking stuff, instead of needing:
```js
patcher.instead("func", obj, function (args, func) { return func.apply(this, args) });
```

## More info

Multiple patchers on the same objects and functions work flawlessly. Patches can be undone in any order.

The name: monkey patch => monkey => simian. Yeah I'm bad at names.

<details>
  <summary>View Simian README</summary>
  <MarkdownLoader src="https://raw.githubusercontent.com/yellowsink/simian/master/README.md" />
</details>