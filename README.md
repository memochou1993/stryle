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

## Available Functions

| Name | Description |
| --- | --- |
| `lowerFirst` | Converts the first character of the given string to lowercase. |
| `splitWords` | Splits a given string into words by inserting spaces at word boundaries. |
| `toCamelCase` | Converts a given string to `camelCase`. |
| `toKebabCase` | Converts a given string to `kebab-case`. |
| `toPascalCase` | Converts a given string to `PascalCase`. |
| `toSnakeCase` | Converts a given string to `snake_case`. |
| `toTitleCase` | Converts a given string to `Title Case`, with options for special terms. |
| `upperFirst` | Converts the first character of the given string to uppercase. |

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
