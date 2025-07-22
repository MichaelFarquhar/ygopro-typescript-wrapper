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
  /** ID or Passcode of the card. @example 80316585 */
  id: number;
  /** Name of the card. @example "Dark Magician" */
  name: string;
  /** Type text under image. @example ["Spellcaster", "Normal"] */
  typeline: string[];
  /** The type of card you are viewing. @example "Normal Monster" */
  type: string;
  /** More readable version of "type" for certain cases. @example "Normal Monster" */
  humanReadableCardType: string;
  /** The backdrop type that this card uses. @example "normal" */
  frameType: string;
  /** Card description/effect. @example "''The ultimate wizard in terms of attack and defense.''" */
  desc: string;
  /** Link to YGOPRODeck card page. @example "https://ygoprodeck.com/card/dark-magician-4003/" */
  ygoprodeck_url: string;
  /** The Archetype that the card belongs to. @example "Dark Magician" */
  archetype?: string;
  /** The ATK value of the card. @example 2500 */
  atk?: number;
  /** The DEF value of the card. @example 2100 / null (Link Monsters) */
  def?: number | null;
  /** The Level/RANK of the card. @example 7 / null (Link Monsters) */
  level?: number | null;
  /** The card race which is officially called type @example "Spellcaster" */
  race?: string;
  /** The attribute of the card. @example "DARK" */
  attribute?: string;
  /** The Pendulum Scale Value. @example 0 */
  scale?: number;
  /** The Link Value of the card if it's of type "Link Monster". @example 0 */
  linkval?: number;
  /** The Link Markers of the card if it's of type "Link Monster". @example ["Top", "Bottom-Left", "Bottom-Right"] */
  linkmarkers?: string[];

  /** Card sets information */
  card_sets: CCardSets;
  /** Card images information */
  card_images?: CCardImages;
  /** Card prices information */
  card_prices: CCardPrices;
  /** Banlist information */
  banlist_info?: CBanlistInfo;
  /** Miscellaneous information if (?misc=yes) */
  misc_info?: CMiscInfo;
};
