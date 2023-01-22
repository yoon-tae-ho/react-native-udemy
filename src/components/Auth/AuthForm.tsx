import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../ui/Button";
import Input from "./Input";

interface IProps {
  isLogin?: boolean;
  onSubmit?: (props?: any) => void;
  credentialsInvalid?: any;
}

function AuthForm({ isLogin, onSubmit, credentialsInvalid }: IProps) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType: any, enteredValue?: any) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    if (onSubmit)
      onSubmit({
        email: enteredEmail,
        confirmEmail: enteredConfirmEmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword,
      });
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Email Address"
          onUpdateValue={() => updateInputValueHandler("email")}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            onUpdateValue={() => updateInputValueHandler("confirmEmail")}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label="Password"
          onUpdateValue={() => updateInputValueHandler("password")}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={() => updateInputValueHandler("confirmPassword")}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  form: {},
  buttons: {
    marginTop: 12,
  },
});
