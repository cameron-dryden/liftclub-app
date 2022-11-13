import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Box } from "native-base";
import { Heading3 } from "./Typography/Headings";

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

function LiftsCalendar() {
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
      height="380px"
      px="2px"
      bg="grayscale.1"
      borderWidth="2px"
      borderColor="app.secondary"
      rounded="20px"
      justifyContent="center"
    >
      <Calendar
        hideArrows={true}
        enableSwipeMonths={true}
        showSixWeeks={true}
        renderHeader={(date) => {
          return <Heading3>{monthNames[date.getMonth()]}'s lifts</Heading3>;
        }}
        onDayPress={(day) => {
          let markedDates = {};
          markedDates[day.dateString] = {
            selected: true,
          };

          setMarkedDate(markedDates);
        }}
        markedDates={markedDate}
        theme={{
          textSectionTitleColor: "#ABABB5",
          selectedDayBackgroundColor: "#8BBDD8",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#8BBDD8",
          dayTextColor: "#111111",
          indicatorColor: "blue",
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
