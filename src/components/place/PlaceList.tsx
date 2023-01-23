import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { IPlace } from "../../interfaces/place.interface";
import PlaceItem from "./PlaceItem";

interface IProps {
  placeList: IPlace[];
}

const PlaceList: FC<IProps> = ({ placeList }: IProps) => {
  return (
    <FlatList
      data={placeList}
      renderItem={({ item }) => <PlaceItem place={item} />}
      keyExtractor={(item, index) => `${index}-${item.id}`}
    />
  );
};

export default PlaceList;
