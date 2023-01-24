import { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import { themeColors } from "../../constants/colors";
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { IPlace } from "../../interfaces/place.interface";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/StackNavigator";
import { useRecoilState } from "recoil";
import { pickedLocationAtom } from "../../atoms/pickedLocation.atom";

const LocationPicker: FC = () => {
  const [permissionStatus, requestPermission] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] =
    useRecoilState(pickedLocationAtom);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "AddPlace">>();

  const verifyPermission = async () => {
    const result = permissionStatus;

    if (!result?.status) return false;

    switch (result.status) {
      case PermissionStatus.GRANTED:
        return true;
      case PermissionStatus.DENIED:
        return false;
      case PermissionStatus.UNDETERMINED:
        return (await requestPermission())?.granted;
      default:
        false;
    }
  };

  const onLocatePress = async () => {
    const isVerified = await verifyPermission();

    if (!isVerified) return;

    const position = await getCurrentPositionAsync();

    if (position)
      setPickedLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
  };

  const onMapPress = () => {
    navigation.navigate("Map");
  };

  return (
    <View>
      <View style={styles.previewContainer}>
        {pickedLocation ? (
          <MapView
            key={`${pickedLocation.lat}-${pickedLocation.lng}`}
            style={styles.map}
            initialRegion={{
              latitude: pickedLocation.lat,
              longitude: pickedLocation.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: pickedLocation.lat,
                longitude: pickedLocation.lng,
              }}
            />
          </MapView>
        ) : (
          <Text style={styles.previewText}>Location Preview</Text>
        )}
      </View>
      <View style={styles.buttons}>
        <OutlinedButton iconName="locate" onPress={onLocatePress}>
          My Location
        </OutlinedButton>
        <OutlinedButton iconName="map" onPress={onMapPress}>
          Pick on Map
        </OutlinedButton>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  previewText: {
    textAlign: "center",
  },
});

export default LocationPicker;
