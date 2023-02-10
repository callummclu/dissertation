---
sidebar_position: 2
---

# Methods

Here are some of the methods available through the Transpiler package.

## transpile

`transpile(code: string)`

This method is used to directly convert espruino-tools/core code into espruino native code.

```javascript
import { transpile } from "@espruino-tools/transpiler";
let espt_code = `
import { Puck } from '@espruino-tool/core'

let p = new Puck();

p.LED.on("red");
`;

let clean_code = transpile(espt_code);
```

## generator

`generator(ast: any, options?: generator_options)`

This method will generate code from an ast, _this method is not intended for general usage_

```javascript

let your_ast = ...

let code = generator(your_ast)

```

`generator_options`

```typescript
object_names?:string;
additional_callees?: any[];
additional_initialisers?: string[];
```

## transformer

`transformer(ast: any, options?: generator_options)`

This code will transform an AST to another AST

```javascript

let your_ast = ...

let transformed_ast = transformer(your_ast)

```
