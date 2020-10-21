# @twigaeng/react-hooks

> A collection of tiny but useful react hooks

[![NPM](https://img.shields.io/npm/v/@twigaeng/react-hooks.svg)](https://www.npmjs.com/package/@twigaeng/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @twigaeng/react-hooks
```

## Usage

```tsx
import React from 'react'

import { useSalesDays } from '@twigaeng/react-hooks/'

const App = () => {
  const date = new Date();
  const today = date.getDay();
  const tomorrow = today + 1;
  const isTodayASalesDay = useSalesDays([today])
  const isTomorrowASalesDay = useSalesDays([tomorrow])
  return (
    <div>
      <p>Is today a sales days? {isTodayASalesDay.toString()}</p>
      <p>Is tomorrow a sales days? {isTomorrowASalesDay.toString()}</p>
    </div>
  )
}
export default App
```

## License

MIT © [joeynimu](https://github.com/joeynimu)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
