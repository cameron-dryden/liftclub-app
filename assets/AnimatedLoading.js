import { useRef, useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import { Animated, Easing } from "react-native";

const AnimatedPath = Animated.createAnimatedComponent(Path);

function AnimatedLoading(props) {
  const trail = useRef(new Animated.Value(0)).current;
  const show = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(trail, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [trail]);

  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 141 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <AnimatedPath
        // Bottom line
        d="M52 123L80 103"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AnimatedPath
        //Middle line
        d="M9.5 119.5L37.5 99.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AnimatedPath
        //Top line
        d="M1 83.5L25.5 67.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AnimatedPath
        //Top wings
        d="M54.5 67.5L67.5001 78.5L90 97.5C90 97.5 92.4849 99.5 95 99.5C99 99.5 100 96.5 100 96.5L138.5 7.5C138.5 7.5 140.092 4.48311 138.5 2.49998C136.868 0.466888 132.5 1.99999 132.5 1.99999L12.5001 30.5C12.5001 30.5 7.00006 31.5 7.00006 34C7.00006 36.5 12.5001 39.5 12.5001 39.5L39 56L121 13.5L54.5 67.5Z"
        fill="#9DD1E1"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AnimatedPath
        //Inside fold
        d="M39 56L48 92L54.5 67.5L121 13.5L39 56Z"
        fill="#C0E4EF"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AnimatedPath
        //Dark triangle
        d="M48 92L54.5 67.5L67.5 78.5L48 92Z"
        fill="#78BED4"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AnimatedLoading;
