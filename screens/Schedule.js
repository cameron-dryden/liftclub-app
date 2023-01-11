import React from "react";
import { Box, VStack, ScrollView, Flex } from "native-base";
import { NavBar } from "../components/Navigation/NavBar";
import { Header } from "../components/Header";
import { LiftsCalendar } from "../components/Schedule/LiftsCalendar";
import { LiftsAgenda } from "../components/Schedule/LiftsAgenda";

function Schedule(props) {
  const [selectedDate, setSelectedDate] = React.useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  });
  // const [liftclubs, setLiftclubs] = React.useState([]);
  // const [isLoading, setLoading] = React.useState(true);

  // const getLiftclubs = async () => {
  //   try {
  //     const response = await fetch("http://192.168.186.4:8080/liftclubs", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const json = await response.json();
  //     console.log(json);
  //     setLiftclubs(json);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // React.useEffect(() => {
  //   getLiftclubs();
  // }, []);

  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Flex width="100%" height="100%" direction="column">
        <Header text="Schedule" />
        <ScrollView flex={1} width="100%">
          <VStack space="4" py="12px">
            <LiftsCalendar setDate={setSelectedDate} />
            <LiftsAgenda date={selectedDate} />
          </VStack>
        </ScrollView>
        <NavBar
          navSelected={props.navSelected}
          setNavSelected={props.setNavSelected}
        />
      </Flex>
    </Box>
  );
}

export { Schedule };
