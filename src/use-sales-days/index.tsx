import { useEffect, useState } from "react";

const useSalesDays = (workingDays: number[]): Boolean => {
  console.info({ workingDays });
  const [isASalesDay, setSalesDay] = useState(false);

  useEffect(() => {
    console.info({ workingDays });
    const date = new Date();
      const today = date.getDay();
      const isTodayASalesDay = workingDays.includes(today);
        if (isTodayASalesDay) setSalesDay(true)

  }, [workingDays])

  return isASalesDay
};

export default useSalesDays;