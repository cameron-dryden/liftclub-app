import React, { useEffect, useState, useRef } from "react";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { Skeleton, Box, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SearchBar } from "../SearchBar";

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

function MapSelector(props) {
  const [isReady, setReady] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [selectedAddress, setAddress] = useState();

  const mapRef = useRef(null);

  const updateUserLocation = async () => {
    setUserLocation((await Location.getCurrentPositionAsync({})).coords);
  };

  const updateUserAddress = async (coordinate) => {
    const address = await mapRef.current.addressForCoordinate(coordinate);
    setAddress(
      address.subThoroughfare +
        " " +
        address.thoroughfare +
        ", " +
        address.locality +
        ", " +
        address.administrativeArea
    );
  };

  useEffect(() => {
    const instantLocation = async () => {
      setUserLocation((await Location.getLastKnownPositionAsync({})).coords);
      // await updateUserAddress({
      //   latitude: userLocation.latitude,
      //   longitude: userLocation.longitude,
      // });
      setReady(true);
    };

    instantLocation();
  }, []);

  return (
    <Box width="100%" height="100%" rounded="10px" overflow="hidden">
      <Skeleton height="100%" width="100%" isLoaded={isReady}>
        <MapView
          ref={mapRef}
          showsUserLocation={true}
          pitchEnabled={false}
          showsCompass={false}
          toolbarEnabled={false}
          width="100%"
          height="100%"
          customMapStyle={mapStyle}
          onMapLoaded={() => {
            mapRef.current.animateToRegion(
              {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              },
              600
            );
          }}
          onRegionChangeComplete={async (region) => {
            props.setLocationValue({
              longitude: region["longitude"],
              latitude: region["latitude"],
            });
          }}
          {...props}
        />
        <Icon
          as={<MaterialCommunityIcons name="map-marker" />}
          size="50px"
          color="app.primary"
          position="absolute"
          top="50%"
          left="50%"
          ml="-25px"
          mt="-50px"
        />
        <SearchBar
          placeholder="Search for address"
          position="absolute"
          mt="10px"
          ml="10px"
        />
      </Skeleton>
    </Box>
  );
}

export { MapSelector };
