# emotion vitest issue

## To reproduce

First install dependencies
```sh
bun i
```

Then run this to see the issue
```sh
bun run test
```


## The issue

```sh
FAIL  src/App.test.tsx [ src/App.test.tsx ]
SyntaxError: Cannot use import statement outside a module
❯ Object.<anonymous> node_modules/@mui/styled-engine/node/index.js:47:38

Module /Users/bnussman/Development/emotion-vitest/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js:1 seems to be an ES Module but shipped in a CommonJS package. You might want to create an issue to the package "@emotion/styled" asking them to ship the file in .mjs extension or add "type": "module" in their package.json.

As a temporary workaround you can try to inline the package by updating your config:

// vitest.config.js
export default {
 test: {
   server: {
     deps: {
       inline: [
         "@emotion/styled"
       ]
     }
   }
 }
}
```
