export type ParamsCardSetInfo = {
  /**
   * The set code of the card set to retrieve information for.
   * @example "SDY-001"
   */
  setCode: string;
};

export type ParamsCardImage = {
  /**
   * The ID of the card to retrieve the image for.
   * @example "42901635"
   */
  cardId: string;
  /**
   * The type of image to retrieve.
   * - "full: "Full size image.
   * - "small": Small size image.
   * - "cropped": The image without the card frame.
   */
  imageType?: "full" | "small" | "cropped";
};

export type ParamsCard = {
  /** The exact name of the card. You can pass multiple | separated names to this parameter (e.g., "Baby Dragon|Time Wizard"). */
  name?: string;
  /** A fuzzy search using a string. For example, "Magician" to search all cards with "Magician" in the name. */
  fname?: string;
  /** The 8-digit passcode of the card. You cannot pass this alongside name. You can pass multiple comma separated IDs. */
  id?: string;
  /** The Konami ID of the card. This is not the passcode. */
  konami_id?: string;
  /** The type of card to filter by. Multiple comma separated types allowed. */
  type?: string;
  /** Filter by ATK value. */
  atk?: number | string;
  /** Filter by DEF value. */
  def?: number | string;
  /** Filter by card level or rank. */
  level?: number | string;
  /** Filter by the card race (e.g., Spellcaster, Warrior, Insect). Multiple comma separated values allowed. */
  race?: string;
  /** Filter by the card attribute. Multiple comma separated values allowed. */
  attribute?: string;
  /** Filter by Link value. */
  link?: number | string;
  /** Filter by Link Marker value (e.g., Top, Bottom, Left, Right, Bottom-Left, Bottom-Right, Top-Left, Top-Right). Multiple comma separated values allowed. */
  linkmarker?: string;
  /** Filter by Pendulum Scale value. */
  scale?: number | string;
  /** Filter by card set (e.g., Metal Raiders, Soul Fusion). */
  cardset?: string;
  /** Filter by archetype (e.g., Dark Magician, Prank-Kids, Blue-Eyes). */
  archetype?: string;
  /** Filter by banlist (TCG, OCG, Goat). */
  banlist?: string;
  /** Sort the order of the cards (atk, def, name, type, level, id, new). */
  sort?: string;
  /** Sort the format of the cards (tcg, goat, ocg goat, speed duel, master duel, rush duel, duel links). */
  format?: string;
  /** Pass "yes" to show additional response info (details). */
  misc?: string;
  /** Check if card is a staple. */
  staple?: boolean;
  /** Check if a card actually has an effect or not. */
  has_effect?: boolean;
  /** Filter based on cards' release start date. Format: YYYY-mm-dd. */
  startdate?: string;
  /** Filter based on cards' release end date. Format: YYYY-mm-dd. */
  enddate?: string;
  /** Pass dateregion as tcg (default) or ocg. */
  dateregion?: string;
};
