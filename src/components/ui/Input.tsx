import { FC } from "react";
import { Control, useController } from "react-hook-form";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface IProps extends TextInputProps {
  control: Control<any, any>;
  name: string;
}

const Input: FC<IProps> = ({ control, name, children, style }: IProps) => {
  const { field } = useController({ name, control, defaultValue: "" });

  return (
    <TextInput
      style={[styles.input, StyleSheet.flatten(style)]}
      ref={field.ref}
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
    >
      {children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    color: "black",
    paddingHorizontal: 4,
    paddingVertical: 8,
    width: "100%",
    fontSize: 16,
  },
});

export default Input;
