import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClubChat } from "./ClubChat";
import { LiftsLift } from "./LiftsLift";
import { CreateClub } from "./CreateClub";

const Stack = createNativeStackNavigator();

function Liftclub(navprops) {
  return (
    <Stack.Navigator
      initialRouteName="liftslist"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="liftslist">
        {(props) => (
          <LiftsLift
            {...props}
            navSelected={navprops.navSelected}
            setNavSelected={navprops.setNavSelected}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="clubchat"
        initialParams={{ clubName: "Name error..." }}
      >
        {(props) => <ClubChat {...props} />}
      </Stack.Screen>
      <Stack.Screen name="createclub">
        {(props) => <CreateClub {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export { Liftclub };
