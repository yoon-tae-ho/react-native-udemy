import { atom } from "recoil";
import { IPlace } from "../interfaces/place.interface";

export const pickedLocationAtom = atom<IPlace["location"] | null>({
  key: "pickedLocationAtom",
  default: null,
});
