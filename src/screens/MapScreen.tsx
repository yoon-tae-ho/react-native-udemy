import { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { IPlace } from "../interfaces/place.interface";
import { pickedLocationAtom } from "../atoms/pickedLocation.atom";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/StackNavigator";

// 서울시청 좌표
const INITIAL_LOCATION: IPlace["location"] = {
  lat: 37.5666805,
  lng: 126.9784147,
};

const MapScreen: FC = () => {
  const [pickedLocation, setPickedLocation] =
    useRecoilState(pickedLocationAtom);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Map">>();

  const onMapPress = (event: MapPressEvent) =>
    setPickedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: pickedLocation ? pickedLocation.lat : INITIAL_LOCATION.lat,
          longitude: pickedLocation ? pickedLocation.lng : INITIAL_LOCATION.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={onMapPress}
      >
        {pickedLocation && (
          <Marker
            coordinate={{
              latitude: pickedLocation.lat,
              longitude: pickedLocation.lng,
            }}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
