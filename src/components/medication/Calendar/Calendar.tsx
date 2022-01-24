import { FC } from "react";
import Styled from "./Calendar.styled";
import { useCalendar } from "@h6s/calendar";

export const Calendar: FC = () => {
  const { headers, body, view } = useCalendar();

  return (
    <Styled.Wrapper>
      <Styled.Calendar>
        {headers.weekDays.map(({ key, value }) => (
          <Styled.CalendarDay>
            <Styled.CalendarHour>{value.getDay() + 1}</Styled.CalendarHour>
            {[...Array(24)].map((_, i) => (
              <Styled.CalendarHour key={`${value.getDay() + 1}_${i}`}>
                {i}
              </Styled.CalendarHour>
            ))}
          </Styled.CalendarDay>
        ))}
      </Styled.Calendar>
    </Styled.Wrapper>
  );
};
