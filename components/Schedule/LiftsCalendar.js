import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Box } from "native-base";
import { Heading3 } from "../Typography/Headings";

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
};
LocaleConfig.defaultLocale = "en";

function LiftsCalendar(props) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [markedDate, setMarkedDate] = useState(() => {
    const today = new Date();
    const currentDate = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    let markToday = {};
    markToday[currentDate] = { selected: true };
    return markToday;
  });

  return (
    <Box
      alignSelf="center"
      width="90%"
      py="5px"
      px="5px"
      bg="grayscale.1"
      borderWidth="2px"
      borderColor="app.secondary"
      rounded="20px"
      justifyContent="center"
      shadow={2}
    >
      <Calendar
        enableSwipeMonths={true}
        showSixWeeks={true}
        markedDates={markedDate}
        markingType="multi-period"
        renderHeader={(date) => {
          return <Heading3>{monthNames[date.getMonth()]}'s lifts</Heading3>;
        }}
        onDayPress={(day) => {
          let markedDates = {};
          markedDates[day.dateString] = {
            selected: true,
          };
          markedDates["2022-11-17"] = {
            periods: [
              { startingDay: true, endingDay: true, color: "#F5A3A3" },
              { startingDay: true, endingDay: true, color: "#DBA3F5" },
            ],
          };

          props.setDate(day.dateString);
          setMarkedDate(markedDates);
        }}
        theme={{
          textSectionTitleColor: "#ABABB5",
          selectedDayBackgroundColor: "#8BBDD8",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#8BBDD8",
          dayTextColor: "#111111",
          indicatorColor: "blue",
          arrowColor: "#8BBDD8",
          textDayFontFamily: "Manrope-Medium",
          textDayHeaderFontFamily: "Manrope-Medium",
          textDayFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </Box>
  );
}

export { LiftsCalendar };
