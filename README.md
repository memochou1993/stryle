# stryle

A collection of utility functions for transforming string case.

## Usage

### Using with ES Modules

Import the module and use it in your code:

```js
import { toTitleCase } from '@memochou1993/stryle';

const output = toTitleCase('hello, world!');
console.log(output);
// Output:
// Hello, World!
```

### Using with UMD Modules

Include the UMD script in your HTML file and use it:

```html
<script src="https://unpkg.com/@memochou1993/stryle/dist/index.umd.js"></script>
<script>
const output = window.Stryle.toTitleCase('hello, world!');
console.log(output);
// Output:
// Hello, World!
</script>
```

## Development

To start a local development server, run:

```bash
npm run dev
```

## Testing

To run the tests for this package, run:

```bash
npm run test
```
