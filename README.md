# @twigaeng/react-hooks

> A collection of tiny but useful react hooks

[![NPM](https://img.shields.io/npm/v/@twigaeng/react-hooks.svg)](https://www.npmjs.com/package/@twigaeng/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @twigaeng/react-hooks
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from '@twigaeng/react-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [joeynimu](https://github.com/joeynimu)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
