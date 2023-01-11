import React, { useRef, useEffect, useState } from "react";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import pb from "../api/base";
import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Pressable, Spinner } from "native-base";
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

function Home(props) {
  const [isReady, setReady] = useState(false);
  const [userLocation, setUserLocation] = useState();

  const mapRef = useRef(null);
  const navigation = useNavigation();

  const updateUserLocation = async () => {
    setUserLocation((await Location.getCurrentPositionAsync({})).coords);
  };

  useEffect(() => {
    const instantLocation = async () => {
      setUserLocation((await Location.getLastKnownPositionAsync({})).coords);
      setReady(true);
    };

    instantLocation();
  }, []);

  return (
    <Box
      height="100%"
      bg="grayscale.1"
      alignItems="center"
      justifyContent="center"
    >
      {!isReady ? (
        <Spinner color="app.primary" size="lg" />
      ) : (
        <MapView
          ref={mapRef}
          showsUserLocation={true}
          showsMyLocationButton={false}
          pitchEnabled={false}
          showsCompass={false}
          width="100%"
          height="100%"
          customMapStyle={mapStyle}
          onMapLoaded={() => {
            mapRef.current.animateToRegion(
              {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0221,
              },
              1000
            );
          }}
          onPress={(e) => console.log(e.nativeEvent)}
        >
          {/* {liftclubs.map((liftclub) => (
            <Marker
              key={liftclub._id}
              coordinate={{
                latitude: parseFloat(
                  liftclub.location.slice(0, liftclub.location.indexOf(","))
                ),
                longitude: parseFloat(
                  liftclub.location.slice(liftclub.location.indexOf(",") + 1)
                ),
              }}
              title={liftclub.name}
            />
          ))} */}
        </MapView>
      )}

      <HStack
        space="5"
        px="5%"
        pt="5%"
        top="20px"
        position="absolute"
        safeAreaTop
      >
        <SearchBar placeholder="Search for lift clubs" />
        <Pressable
          onPress={() => {
            pb.authStore.clear();
            AsyncStorage.removeItem("@userKey");
            navigation.navigate("login");
          }}
        >
          <Profilephoto />
        </Pressable>
      </HStack>
      <NavBar
        navSelected={props.navSelected}
        setNavSelected={props.setNavSelected}
      />
    </Box>
  );
}

export { Home };
