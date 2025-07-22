export type Banlist = "Forbidden" | "Limited" | "Semi-Limited";

export type CBanlistInfo = {
  ban_tcg?: Banlist;
  ban_ocg?: Banlist;
  ban_goat?: Banlist;
};

export type CCardSets = Array<{
  set_name: string; // "Starter Deck: Yugi"
  set_code: string; // "SDY-046"
  set_rarity: string; // "Super Rare"
  set_rarity_code: string; // "(SR)"
  set_edition?: string; // With tcgplayer flag - "1st Edition"
  set_price: string; // "0"
  set_url?: string; // With tcgplayer flag - "https://partner.tcgplayer.com/..."
}>;

export type CCardImages = Array<{
  id: number; // 80316585
  image_url: string; // "https://images.ygoprodeck.com/images/cards/80316585.jpg"
  image_url_small?: string; // "https://images.ygoprodeck.com/images/cards_small/80316585.jpg"
  image_url_cropped?: string; // "https://images.ygoprodeck.com/images/cards_cropped/80316585.jpg"
}>;

export type CCardPrices = Array<{
  cardmarket_price: string; // "0.03"
  tcgplayer_price: string; // "0.24"
  ebay_price: string; // "9.95"
  amazon_price: string; // "4.05"
  coolstuffinc_price: string; // "0.39"
}>;

export type CMiscInfo = {
  beta_name?: string; // "Harpie Lady"
  views: number; // 12345
  viewsweek: number; // 678
  upvotes: number; // 100
  downvotes: number; // 5
  formats?: string[]; // ["GOAT", "OCG GOAT"]
  beta_id?: number; // 100267002
  treated_as?: string; // "Harpie Lady"
  tcg_date?: string; // "2002-03-15"
  ocg_date?: string; // "2002-03-15"
  konami_id?: string; // "12345678"
  md_rarity?: string; // "Common"
  has_effect: number; // 1 --- (1 for true, 0 for false)
};

export type Card = {
  id: number; // 80316585s
  name: string; // "Dark Magician"
  typeline: string[]; // ["Spellcaster", "Normal"]
  type: string; // "Normal Monster"
  humanReadableCardType: string; // "Normal Monster"
  frameType: string; // "normal"
  desc: string; // "''The ultimate wizard in terms of attack and defense.''"
  ygoprodeck_url: string; // "https://ygoprodeck.com/card/dark-magician-4003/"
  archetype?: string; // "Dark Magician"
  atk?: number; // 2500
  def?: number | null; // 2100 / null (Link Monsters)
  level?: number | null; // 7 / null (Link Monsters)
  race?: string; // "Spellcaster"
  attribute?: string; // "DARK"
  scale?: number; // 0 (only for Pendulum Monsters)
  linkval?: number; // 0 (only for Link Monsters)
  linkmarkers?: string[]; // [] (only for Link Monsters)

  card_sets: CCardSets; // Card sets information
  card_images?: CCardImages; // Card images information
  card_prices: CCardPrices; // Card prices information
  banlist_info?: CBanlistInfo; // Banlist information
  misc_info?: CMiscInfo; // Miscellaneous information if (?misc=yes)
};
