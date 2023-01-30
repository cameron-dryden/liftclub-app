import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Verify } from "./Verify";
import { EmailVerification } from "./EmailVerification";

const Stack = createNativeStackNavigator();

function Startup() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login">
        {(props) => <Login {...props} />}
      </Stack.Screen>
      <Stack.Screen name="signup">
        {(props) => <SignUp {...props} />}
      </Stack.Screen>
      <Stack.Screen name="verify">
        {(props) => <Verify {...props} />}
      </Stack.Screen>
      <Stack.Screen name="email-verification">
        {(props) => <EmailVerification {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export { Startup };
