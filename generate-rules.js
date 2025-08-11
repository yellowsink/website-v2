#!/usr/bin/env node
const fs = require("fs");

const index = fs.readFileSync("dist/index.html").toString();

let rules = fs.readFileSync("Caddyfile-rules").toString();

const addRule = (rule) => rule && (rules += `header +Link "<${rule}>; rel=\"preload\""\n`);

// read google fonts url and create preload
addRule(
	index.match(/href="(https:\/\/fonts\.googleapis\.com\/.*?)"/)?.[1]
);


// find the generically named css file shared across pages
const sharedCss = index.match(/href="\/assets\/([a-f0-9]+\.[a-f0-9]+\.css)"/)?.[1];

if (sharedCss) addRule(`https://{host}/assets/${sharedCss}`);

// shared js file
const sharedJs = index.match(/src="\/(hoisted\.[a-f0-9]+\.js)"/)?.[1];

if (sharedJs) addRule(`https://{host}/${sharedJs}`);

// write rules
fs.writeFileSync("dist/Caddyfile-rules", rules);
