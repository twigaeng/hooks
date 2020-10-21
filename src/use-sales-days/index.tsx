import { useEffect, useState } from "react";

const useSalesDays = (workingDays: number[]): Boolean => {

  const [isASalesDay, setSalesDay] = useState(false);

  useEffect(() => {
    const todaysDate = new Date();
      const dayOfTheWeek = todaysDate.getDay();
      const isTodayASalesDay = workingDays.includes(dayOfTheWeek);
        if (isTodayASalesDay) setSalesDay(true)

  }, [workingDays])

  return isASalesDay
};

export default useSalesDays;