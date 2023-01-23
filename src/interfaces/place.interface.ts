interface ICoords {
  lat: number;
  lng: number;
}

export interface IPlace {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: ICoords;
}
