import { useState } from "react";
import { DateObject, Calendar as MultiCalendar } from "react-multi-date-picker";
import "./styles.css";

interface CalendarProps {
  onChange?: (value: DateObject[]) => void;
}

function Calendar({ onChange }: CalendarProps) {
  const [dates, setDates] = useState<DateObject[]>([]);
  const handleOnChange = (value: DateObject[]) => {
    setDates(value);
    onChange?.(value);
  };

  return (
    <MultiCalendar
      format="DD/MM/YYYY"
      value={dates}
      onChange={handleOnChange}
      multiple
      sort
    />
  );
}

export { Calendar };
