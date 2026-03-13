import { ImageSourcePropType } from "react-native";

export type Location = {
    id: string;
    type: "gas" | "restaurant" | "food";
    coordinate: [number, number];
  };
  

  export type OfferDetails = {
    expires: string;
    location: string;
    networks: ImageSourcePropType[];
    terms: string;
  };
  
  export type Offer = {
    id: number;
    name: string;
    cashback: string;
    min: string;
    stakeCashback: string;
    image: ImageSourcePropType;
    distance: string;
    days: string;
    offerDetails: OfferDetails;
    type?:string
  };