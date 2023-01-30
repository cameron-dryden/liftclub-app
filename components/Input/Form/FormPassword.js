import { useState } from "react";
import { Link, IconButton, Modal, Text } from "native-base";
import { Lock, Visibility, VisibilityOff } from "../../../assets/icons/Icons";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import ModalInput from "./ModalInput";
import forgotPassword from "../../../api/users/forgotPassword";

function FormPassword(props) {
  const [isInputFocused, setFocused] = useState(false);
  const [passwordVisible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <FormInput
        type={passwordVisible ? "text" : "password"}
        InputRightElement={
          props.addForgot && (
            <Link
              _text={{ fontWeight: "semibold" }}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              FORGOT
            </Link>
          )
        }
        InputLeftElement={
          isInputFocused ? (
            <IconButton
              icon={passwordVisible ? <Visibility /> : <VisibilityOff />}
              _icon={{
                size: "md",
                color: "primary.200",
              }}
              size="md"
              p={1}
              onPress={() => {
                setVisible(!passwordVisible);
              }}
            />
          ) : (
            <Lock size="md" m={1} />
          )
        }
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
          setVisible(false);
        }}
        {...props}
      />
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        size="lg"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password?</Modal.Header>
          <Modal.Body>
            <Text fontSize="sm" color="text.600" pb={4}>
              Enter your student email address and we'll send a link to reset
              your password.
            </Text>
            <ModalInput
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
            />
          </Modal.Body>
          <Modal.Footer py={2} alignItems="center" justifyContent="center">
            <FormButton
              buttonText="Proceed"
              onPress={async () => {
                await forgotPassword(email);
                setEmail("");
                setModalVisible(false);
              }}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default FormPassword;
