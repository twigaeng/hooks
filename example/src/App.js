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
