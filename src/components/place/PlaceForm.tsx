import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../ui/Input";
import { themeColors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import OutlinedButton from "../ui/OutlinedButton";
import LocationPicker from "./LocationPicker";

interface IForm {
  name: string;
}

const PlaceForm: FC = () => {
  const { control, handleSubmit } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log("data: ", data);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Place Name</Text>
        <Input style={styles.input} name="name" control={control} />
      </View>
      {/* Location Picker */}
      <LocationPicker />
      {/* Image Picker */}
      <ImagePicker />
      {/* Submit Button */}
      <OutlinedButton onPress={handleSubmit(onSubmit)}>Submit</OutlinedButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: themeColors.primary500,
  },
  input: {
    marginVertical: 8,
    borderBottomColor: themeColors.primary700,
    borderBottomWidth: 2,
    backgroundColor: themeColors.primary100,
  },
});

export default PlaceForm;
