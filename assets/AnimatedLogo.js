import { useRef, useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import { Animated, Easing } from "react-native";

const AnimatedPath = Animated.createAnimatedComponent(Path);

function AnimatedLogo(props) {
  const trail = useRef(new Animated.Value(-1500)).current;
  const show = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(trail, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }),
      Animated.timing(show, {
        toValue: 1,
        duration: 220,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }),
    ]).start();
  }, [trail, show]);

  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 398 246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <AnimatedPath
        d="m282.5 153.5-80.5-50 165-102L163.5 94 89 72 367 1.5l-84.5 152Z"
        fill="#B1CDE2"
        fillOpacity={show}
      />
      <AnimatedPath
        d="m367 1.5-84.5 152-80.5-50 165-102Zm0 0L89 72l74.5 22L367 1.5Z"
        stroke="#000"
        strokeOpacity={show}
      />
      <AnimatedPath
        d="M184 162.5 163.5 94l203-92L202 103.5l29 18-47 41Z"
        fill="#8BBDD8"
        fillOpacity={show}
      />
      <AnimatedPath
        d="M184 162.5 163.5 94l203-92L202 103.5m-18 59 18-59m-18 59 47-41-29-18"
        stroke="#000"
        strokeOpacity={show}
      />
      <AnimatedPath
        d="M169.5 175C128 216.5 108.132 243.084 55 236c-52.5-7-71.5-61-36-95 14.667-11.167 50.9-24.4 78.5 12 23.126 30.5 56.9 82.2 158.5 91 27 1.333 92.9-6.7 140.5-49.5"
        stroke="#000"
        strokeWidth={2}
        strokeDasharray="1500"
        strokeDashoffset={trail}
      />
    </Svg>
  );
}

export default AnimatedLogo;
