import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IPlace } from "../interfaces/place.interface";
import PlaceList from "../components/place/PlaceList";
import { themeColors } from "../constants/colors";

const samplePlaces: IPlace[] = [];

const AllPlaces: FC = () => {
  return (
    <View style={styles.pageContainer}>
      {samplePlaces && samplePlaces.length !== 0 ? (
        <PlaceList placeList={samplePlaces} />
      ) : (
        <View style={styles.fallbackContainer}>
          <Text style={styles.fallbackText}>
            No place added yet - start adding some!
          </Text>
        </View>
      )}
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: themeColors.primary200,
  },
});
