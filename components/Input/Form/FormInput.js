import { Input, FormControl, Text } from "native-base";
import { Error } from "../../../assets/icons/Icons";

function FormInput(props) {
  return (
    <FormControl {...props._form}>
      <Input
        variant="underlined"
        size="lg"
        fontSize="lg"
        focusOutlineColor="primary.200"
        _input={{ ml: 2 }}
        _focus={{
          selectionColor: "primary.200",
        }}
        {...props}
      />
      {props.helperText && !(props._form || {}).isInvalid ? (
        <FormControl.HelperText mt={1}>
          <Text fontSize="xs" color="text.400">
            {props.helperText}
          </Text>
        </FormControl.HelperText>
      ) : null}
      <FormControl.ErrorMessage mt={1} leftIcon={<Error size="sm" />}>
        <Text fontWeight="semibold">{props.errorMessage}</Text>
      </FormControl.ErrorMessage>
    </FormControl>
  );
}

export default FormInput;
