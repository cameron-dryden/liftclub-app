import { useState } from "react";
import { Pressable } from "native-base";
import FormInput from "./FormInput";
import DateTimePicker from "@react-native-community/datetimepicker";

function FormDatePicker(props) {
  const [showDTP, setDTP] = useState(false);

  return (
    <Pressable onPress={() => setDTP(true)}>
      <FormInput isReadOnly={true} {...props} />
      {showDTP && (
        <DateTimePicker
          value={props._dtp.value ? props._dtp.value : new Date()}
          mode="date"
          onChange={(event, selectedDate) => {
            setDTP(false);

            if (event.type === "set") {
              props._dtp.onChange(selectedDate);
            }
          }}
          maximumDate={new Date()}
        />
      )}
    </Pressable>
  );
}

export default FormDatePicker;
