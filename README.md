# Stryle

A collection of utility functions for transforming string cases in various formats.

## Getting Started

### Using with ES Modules

To get started with ES Modules, simply import the module and use it in your code:

```js
import { toTitleCase } from '@memochou1993/stryle';

const output = toTitleCase('hello, stryle!', {
  specialTerms: ['STRYLE'],
});

// Output:
// Hello, STRYLE!
```

### Using with UMD Modules

Alternatively, if you're using UMD modules, include the script in your HTML file and use it in your code:

```html
<script src="https://unpkg.com/@memochou1993/stryle/dist/index.umd.js"></script>
<script>
const output = window.Stryle.toTitleCase('hello, stryle!', {
  specialTerms: ['STRYLE'],
});

// Output:
// Hello, STRYLE!
</script>
```

## Available Methods

| Name | Description |
| --- | --- |
| `capitalize` | Capitalizes the first letter of a string. |
| `toKebabCase` | Converts a string to `kebab-case` (e.g., hello-world). |
| `toSnakeCase` | Converts a string to `snake_case` (e.g., hello_world). |
| `toTitleCase` | Converts a string to `Title Case`, with options for special terms. |

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
