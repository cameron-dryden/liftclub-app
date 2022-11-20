import React from "react";
import { Box, HStack } from "native-base";
import MapView from "react-native-maps";
import { NavBar } from "../components/Navigation/NavBar";
import { SearchBar } from "../components/SearchBar";
import { Profilephoto } from "../components/Profilephoto";

function Home() {
  return (
    <Box height="100%" bg="grayscale.1">
      <MapView
        width="100%"
        height="100%"
        region={{
          latitude: -33.848587782988936,
          longitude: 18.638772703707218,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => console.log(e.nativeEvent)}
      />
      <HStack
        space="5"
        px="5%"
        pt="5%"
        top="20px"
        position="absolute"
        safeAreaTop
      >
        <SearchBar />
        <Profilephoto />
      </HStack>
      <NavBar />
    </Box>
  );
}

export { Home };
