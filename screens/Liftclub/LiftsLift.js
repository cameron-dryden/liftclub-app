import React, { useEffect, useState } from "react";
import listLiftclubs from "../../api/liftclubs/listLiftclubs";
import { RefreshControl } from "react-native";
import { Box, Flex, FlatList } from "native-base";
import { Header } from "../../components/Header";
import { LiftclubProfile } from "../../components/Liftclub/LiftclubProfile";
import { NavBar } from "../../components/Navigation/NavBar";
import { CreateLiftclub } from "../../components/Liftclub/CreateLiftclub";

const clubColors = [
  "app.red",
  "app.orange",
  "app.yellow",
  "app.green",
  "app.cyan",
  "app.blue",
  "app.purple",
  "app.pink",
];

function LiftsLift(props) {
  const [liftclubs, setLiftclubs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getLiftclubs = async () => {
    try {
      setLiftclubs(await listLiftclubs());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLiftclubs();
  }, []);

  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Flex width="100%" height="100%" direction="column">
        <Header text="My lift clubs" />
        <Box py="10px">
          <FlatList
            data={liftclubs}
            renderItem={({ item, index }) => (
              <Box alignItems="center" py="8px">
                <LiftclubProfile
                  clubName={item.name}
                  notifications={3}
                  clubColor={clubColors[index % clubColors.length]}
                  {...props}
                />
              </Box>
            )}
            keyExtractor={(item) => item.id}
            refreshControl={
              <RefreshControl
                colors={["#8BBDD8"]}
                tintColor={["#8BBDD8"]}
                refreshing={isLoading}
                onRefresh={() => {
                  setLoading(true);
                  getLiftclubs();
                }}
              />
            }
          />
        </Box>
        <NavBar
          navSelected={props.navSelected}
          setNavSelected={props.setNavSelected}
        />
        <CreateLiftclub {...props} />
      </Flex>
    </Box>
  );
}

export { LiftsLift };
