import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { IPlace } from "../../interfaces/place.interface";

interface IProps {
  place: IPlace;
}

const PlaceItem: FC<IProps> = ({ place }: IProps) => {
  const onPress = () => {};

  return (
    <View>
      <Pressable onPress={onPress}>
        <Image source={{ uri: place.imageUri }} />
        <View>
          <Text>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PlaceItem;
