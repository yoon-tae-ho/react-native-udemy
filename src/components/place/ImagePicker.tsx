import {
  getCameraPermissionsAsync,
  launchCameraAsync,
  PermissionStatus,
  requestCameraPermissionsAsync,
} from "expo-image-picker";
import { FC, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { themeColors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

const verifyPermission = async () => {
  const result = await getCameraPermissionsAsync();

  if (!result?.status) return false;

  switch (result.status) {
    case PermissionStatus.GRANTED:
      return true;
    case PermissionStatus.DENIED:
      return false;
    case PermissionStatus.UNDETERMINED:
      return (await requestCameraPermissionsAsync())?.granted;
    default:
      false;
  }
};

const ImagePicker: FC = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const onPress = async () => {
    const isVerified = await verifyPermission();

    if (!isVerified) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!image || image.canceled) return;

    setImageUri(image.assets[0].uri ?? null);
  };

  return (
    <View>
      {/* 이미지 미리보기 */}
      {imageUri && (
        <View style={styles.previewContainer}>
          <Image style={styles.previewImage} source={{ uri: imageUri }} />
        </View>
      )}
      <OutlinedButton iconName="camera" onPress={onPress}>
        Camera
      </OutlinedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: themeColors.primary100,
    borderRadius: 4,
    resizeMode: "cover",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
});

export default ImagePicker;
