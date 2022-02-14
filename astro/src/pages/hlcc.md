---
layout: "../layouts/BaseLayout.astro"
title: HLCC
---

## The making of HLCC

### What is HLCC?
HLCC stands for High Level Cord Compiler.
It is meant to make building small little snippets for Discord really really easy.

In the past, you have either had to rely on a client mod, or write your own manual webpack injection logic.

For the sake of demonstration, that looks something like this:
```javascript
webpackChunkdiscord_app.push([
  [Symbol()],
  {},
  (e) => {
    for (const k in e.c) {
      const m = e.c[k].exports;
      if (m?.default?.getChannel)
        console.log(m.default);
    }
  }
])
```

Which prints all modules containing a `getChannel` key to the console.