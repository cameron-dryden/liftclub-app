import React from "react";
import { Box, HStack } from "native-base";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { NavBar } from "../components/Navigation/NavBar";
import { SearchBar } from "../components/SearchBar";
import { Profilephoto } from "../components/Profilephoto";

const mapStyle = [
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

function Home() {
  const liftclubs = require("../testing/allliftclubs.json");
  return (
    <Box height="100%" bg="grayscale.1">
      <MapView
        width="100%"
        height="100%"
        customMapStyle={mapStyle}
        showsCompass={false}
        region={{
          latitude: -33.848587782988936,
          longitude: 18.638772703707218,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0221,
        }}
        onPress={(e) => console.log(e.nativeEvent)}
      >
        {liftclubs.map((liftclub) => (
          <Marker
            key={liftclub.id}
            coordinate={{
              latitude: liftclub.location_latitude,
              longitude: liftclub.location_longitude,
            }}
            title={liftclub.club_name}
            description={liftclub.transit_dates}
          />
        ))}
      </MapView>
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
