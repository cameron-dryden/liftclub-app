import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Box, Heading } from "native-base";

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

function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function LiftsCalendar(props) {
  const [isLoading, setLoading] = React.useState(true);
  const [markedPeriods, setMarkedPeriods] = useState({});
  const [allMarkings, setAllMarkings] = useState({});
  let selectedDate = {};

  const getMarkedDates = async () => {
    try {
      const response = await fetch("http://192.168.186.4:8080/liftclubs", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      let markedPeriods = {};
      json.forEach((item) => {
        item.days.forEach((day) => {
          markedPeriods[getFormattedDate(new Date(day.date))] = {
            periods: [{ startingDay: true, endingDay: true, color: "#F5A3A3" }],
          };
        });
      });
      setMarkedPeriods(markedPeriods);
      setAllMarkings({ ...markedPeriods, ...selectedDate });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getMarkedDates();
  }, []);

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
        markedDates={allMarkings}
        markingType="multi-period"
        renderHeader={(date) => {
          return (
            <Heading size="lg">{monthNames[date.getMonth()]}'s lifts</Heading>
          );
        }}
        onDayPress={(day) => {
          selectedDate = {};
          selectedDate[day.dateString] = { selected: true };
          setAllMarkings({ ...markedPeriods, ...selectedDate });

          props.setDate(day.dateString);
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
