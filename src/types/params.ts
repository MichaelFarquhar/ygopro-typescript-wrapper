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
