import { FC, useEffect } from "react";
import Styled from "./Calendar.styled";
import { useCalendar } from "@h6s/calendar";
import { format } from "date-fns";
import locale from "date-fns/locale/sk";
import { Visitation } from "@services";

interface Props {
  visits: Visitation[];
}

export const Calendar: FC<Props> = ({ visits }) => {
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
            {[...Array(14)].map((_, i) => {
              const visit = visits.find((visit) => {
                const date = new Date(visit.dateTime);

                if (
                  date.getDate() === value.getDate() &&
                  date.getHours() === i + 9
                ) {
                  return true;
                }
              });

              return (
                <Styled.CalendarEntry key={`${value.getDay()}_${i}`}>
                  {visit && (
                    <Styled.CalVisit>
                      {new Date(visit.dateTime).getHours()}:00,{" "}
                      {visit.client.name} {visit.client.surname} <br />{" "}
                      {visit.note}
                    </Styled.CalVisit>
                  )}
                  <span key={i} id={`${i}`}>
                    {i + 9}:00
                  </span>
                </Styled.CalendarEntry>
              );
            })}
          </Styled.CalendarDay>
        ))}
      </Styled.Calendar>
    </Styled.Wrapper>
  );
};
