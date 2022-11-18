import React from "react";
import { Box, VStack, ScrollView, Flex } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavBar } from "../../components/Navigation/NavBar";
import { Header } from "../../components/Header";
import { LiftclubProfile } from "../../components/Liftclub/LiftclubProfile";
import { ClubChat } from "./ClubChat";
import { LiftsLift } from "./LiftsLift";

const Stack = createNativeStackNavigator();

function Liftclub() {
  return (
    <Stack.Navigator
      initialRouteName="liftslist"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="liftslist">
        {(props) => <LiftsLift {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="clubchat"
        initialParams={{ clubName: "Name error..." }}
      >
        {(props) => <ClubChat {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export { Liftclub };
