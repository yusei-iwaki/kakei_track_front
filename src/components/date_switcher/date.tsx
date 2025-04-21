"use client";

import { format, addMonths, subMonths } from "date-fns";
import { useRouter } from "next/navigation";
import { ja } from "date-fns/locale";
import { useState } from "react";
import styles from "./date.module.scss";

const DateSwitcher = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const router = useRouter();

  const onDateChange = (date: Date) => {
    setCurrentDate(date);
    const formattedDate = format(date, "yyyy-MM");
    router.push(`?date=${formattedDate}`);
  };

  const fullWidthNumber = (date: string) => {
    return date.replace(/[0-9]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) + 0xfee0)
    );
  };
  return (
    <>
      <div className={styles.date_container}>
        <button
          className={styles.date_button}
          onClick={() => onDateChange(subMonths(currentDate, 1))}
        >
          ＜
        </button>
        <h2 className={styles.date_text}>
          {fullWidthNumber(format(currentDate, "yyyy年MM月", { locale: ja }))}
        </h2>
        <button
          className={styles.date_button}
          onClick={() => onDateChange(addMonths(currentDate, 1))}
        >
          ＞
        </button>
      </div>
    </>
  );
};

export default DateSwitcher;
