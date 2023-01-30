import { createIcon } from "native-base";

const CalendarToday = (props) => {
  const CustomIcon = createIcon({
    viewBox: "0 0 48 48",
    d: "M9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V5.55q0-.65.45-1.1.45-.45 1.15-.45t1.175.45q.475.45.475 1.15V7h17V5.55q0-.65.45-1.1Q33.4 4 34.1 4t1.175.45q.475.45.475 1.15V7H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5Z",
  });
  return <CustomIcon {...props} />;
};

export default CalendarToday;
