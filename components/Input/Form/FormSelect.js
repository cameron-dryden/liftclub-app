import { Select, FormControl, Input, Text } from "native-base";
import { Expand, Error } from "../../../assets/icons/Icons";

function FormSelect(props) {
  return (
    <FormControl {...props._form}>
      <Select
        variant="underlined"
        dropdownIcon={<Expand size="xl" color="muted.500" />}
        fontSize="lg"
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
        _actionSheetBody={{
          ListHeaderComponent: (
            <FormControl px="12px" mb="12px" background="transparent">
              <Input
                variant="condensedInput"
                height="40px"
                fontSize={16}
                placeholder="Search"
                {...props.search}
              />
            </FormControl>
          ),
        }}
        {...props}
      />
      <FormControl.ErrorMessage mt={1} leftIcon={<Error size="sm" />}>
        <Text fontWeight="semibold">{props.errorMessage}</Text>
      </FormControl.ErrorMessage>
    </FormControl>
  );
}

export default FormSelect;
