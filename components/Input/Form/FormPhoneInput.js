import React, { useState } from "react";
import { Select } from "native-base";
import FormInput from "./FormInput";
import CountryCodes from "../../../assets/phone_codes/CountryCodes";

function FormPhoneInput(props) {
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <FormInput
      keyboardType="numeric"
      InputLeftElement={
        <Select
          variant="native"
          p="0px"
          width={7}
          color={isInputFocused ? "primary.200" : "muted.500"}
          fontSize="sm"
          dropdownIcon={<></>}
          selectedValue={props._select.selectedValue}
          onValueChange={props._select.onValueChange}
          _item={{
            alignItems: "center",
            _pressed: {
              bg: "primary.50",
              rounded: "full",
            },
          }}
          _selectedItem={{
            bg: "primary.200",
            rounded: "full",
            _text: { color: "white" },
          }}
        >
          <Select.Item label="+27" value="+27" />
          {/* {CountryCodes.map(({ name, dial_code, code }) => (
            <Select.Item
              key={code}
              label={`${dial_code} - ${name}`}
              value={dial_code}
            />
          ))} */}
        </Select>
      }
      onFocus={() => setInputFocused(true)}
      onBlur={() => setInputFocused(false)}
      {...props}
    />
  );
}

export default FormPhoneInput;
