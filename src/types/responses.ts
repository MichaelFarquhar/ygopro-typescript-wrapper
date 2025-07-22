import { Card } from "./card";
import { Meta } from "./general";

export type ResponseCardInfo = {
  data: Card[]; // Array of Card objects
};

export type ResponseRandomCard = {
  data: Card[]; // Array of Card objects
  meta: Meta; // Metadata about the response
};

export type ResponseAllCardSets = Array<{
  set_name: string; // "Starter Deck: Yugi"
  set_code: string; // "SDY-046"
  num_of_cards: number; // 40
  tcg_date: string; // "2002-03-15"
  set_image?: string; // "https:\/\/images.ygoprodeck.com\/images\/sets\/YS15.jpg"
}>;

export type ResponseCardSetInformation = {
  id: number; // 54652250
  name: string; // "Man-Eater Bug",
  set_name: string; // "Starter Deck: Yugi"
  set_code: string; // "SDY-046"
  set_rarity: string; // "Common"
  set_price: string; // "2.25"
};

export type ResponseCardArchetypes = Array<{
  archetype_type: string; // "-Eyes Dragon"
}>;

export type ResponseCheckDBVersion = Array<{
  database_version: string; // "141.14",
  last_update: string; // "2025-07-22 04:02:58"
}>;
