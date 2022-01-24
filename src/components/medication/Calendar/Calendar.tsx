import { FC, useEffect } from "react";
import Styled from "./Calendar.styled";
import { useCalendar } from "@h6s/calendar";
import { format } from "date-fns";
import locale from "date-fns/locale/sk";

export const Calendar: FC = () => {
  const { cursorDate, headers, body, view, navigation } = useCalendar();

  useEffect(() => view.showWeekView(), []);

  return (
    <Styled.Wrapper>
      <Styled.Navigation.Base>
        <Styled.Navigation.Wrapper>
          <Styled.Navigation.Button
            onClick={() => navigation.toPrev()}
            direction="prev"
          >
            {"<"}
          </Styled.Navigation.Button>
          <Styled.Navigation.Button direction="none">
            {format(cursorDate, "MMMM Y", { locale })}
          </Styled.Navigation.Button>
          <Styled.Navigation.Button
            onClick={() => navigation.toNext()}
            direction="next"
          >
            {">"}
          </Styled.Navigation.Button>
        </Styled.Navigation.Wrapper>
      </Styled.Navigation.Base>
      <Styled.Calendar>
        {headers.weekDays.map(({ key, value }) => (
          <Styled.CalendarDay key={key}>
            <Styled.CalendarEntry>
              <Styled.CalendarDayHeading>
                {format(value, "E", { locale })}
              </Styled.CalendarDayHeading>
              <Styled.CalendarBigDateHeading>
                {value.getDate()}
              </Styled.CalendarBigDateHeading>
            </Styled.CalendarEntry>
            {[...Array(24)].map((_, i) => (
              <Styled.CalendarEntry key={`${value.getDay()}_${i}`}>
                <span key={i} id={`${i}`}>
                  {i}:00
                </span>
              </Styled.CalendarEntry>
            ))}
          </Styled.CalendarDay>
        ))}
      </Styled.Calendar>
    </Styled.Wrapper>
  );
};
