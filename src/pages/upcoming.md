---
layout: "../layouts/BaseLayout.astro"
title: Upcoming Projects
---

# Upcoming Projects from me

No guarantee these will ever be finished, nor this page ever updated, but you never know,
some of these may actually get worked on!

## [Slices.NET](https://github.com/yellowsink/Slices.NET)

Take slices of collections without having to shallow copy the whole thing.
Also provides a data structure for storing huge amounts of data.

## [lazpack](https://github.com/yellowsink/lazpack)

The missing package manager for your osu!lazer rulesets.

## [DynamiData](https://github.com/DynamiData)

A simple way to build data structures and queries programmatically,
using delcarative patterns established in languages already.

Targeted at JS via JSX:

```jsx
const DataComponent = ({ key }) => (
  <record key={key}>
    <string key="b">c</string>
  </record>
);
const messagepack = (
  <msgpack>
    <string key="foo">bar</string>
    <DataComponent key="baz" />
  </msgpack>
);
```

And F# via simple functions.
