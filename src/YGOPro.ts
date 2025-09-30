import { Languages } from "./types/general";
import { ParamsCard, ParamsCardImage, ParamsCardSetInfo } from "./types/params";
import {
  ResponseAllCardSets,
  ResponseCardArchetypes,
  ResponseCheckDBVersion,
  ResponseRandomCard,
} from "./types/responses";

export class YGOPro {
  private static BASE_URL = "https://db.ygoprodeck.com/api/v7";

  private LANGUAGE = "en";

  constructor(public language: Languages = "en", public useProxy: boolean = true) {
    if (language !== "en") this.LANGUAGE = language;
  }

  private request(endpoint: string): any {
    const prefix = this.useProxy ? "/api" : YGOPro.BASE_URL;
    const url = `${prefix}/${endpoint}${
      endpoint === "cardinfo.php" ? `?language=${this.LANGUAGE}` : ""
    }`;

    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }

  public cards = async (options: ParamsCard): Promise<any> => {
    const params =
      options && Object.keys(options).length
        ? "?" +
          Object.entries(options)
            .map(
              ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`
            )
            .join("&")
        : "";

    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php${params}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  };

  /**
   * Returns the URL of a card image based on the provided parameters. As stated in the official documentation, please only pull an image once and then store it locally.
   * @param options - An object containing the parameters for retrieving the card image.
   * - `cardId`: The ID of the card to retrieve the image for.
   * - `imageType`: The type of image to retrieve. Defaults to "full" if not provided.
   * @returns URL string of the card image.
   */
  public imageUrl = async (options: ParamsCardImage): Promise<string> => {
    const { imageType = "full", cardId } = options;

    const urlMapping = {
      full: "cards/",
      small: "cards_small/",
      cropped: "cards_cropped/",
    };

    return `https://images.ygoprodeck.com/images/${urlMapping[imageType]}${cardId}.jpg`;
  };

  /**
   * @name AllCardSets
   * Retrieves all of the current Yu-Gi-Oh! Card Sets, sorted by A-Z.
   * Response contains the Set Name, Set Code, Number of Cards and TCG Date (Release Date).
   * @returns A promise that resolves to a {@link ResponseAllCardSets}
   */
  public allCardSets = async (): Promise<ResponseAllCardSets> => {
    return this.request("cardsets.php");
  };

  /**
   * Retrieves information about a specific card set given its set code.
   * @param options - An object containing the set code of the card set to retrieve information for.
   * @returns A promise that resolves to a {@link ResponseAllCardSets} containing the details of the card set.
   */
  public cardSetInfo = async (options: ParamsCardSetInfo): Promise<ResponseAllCardSets> => {
    const { setCode } = options;

    if (!setCode) {
      throw new Error("setCode parameter is required");
    }
    return this.request(`cardsetsinfo.php?setcode=${setCode}`);
  };

  /**
   *
   * Returns all of the current Yu-Gi-Oh! Card Archetype Names, sorted by A-Z.
   * @returns A promise that resolves to a {@link ResponseCardArchetypes}
   */
  public allArchetypes = async (): Promise<ResponseCardArchetypes> => {
    return this.request("archetypes.php");
  };

  /**
   * Retrieves a random card's data from the YGOPro API.
   * @returns A promise that resolves to a {@link ResponseRandomCard} containing the details of the random card.
   */
  public randomCard = async (): Promise<ResponseRandomCard> => {
    return this.request("randomcard.php");
  };

  /**
   * Retrieves the name of a random card from the YGOPro API. This does not return the full card data, only the name string.
   * @returns A promise that resolves to the string name of a random card.
   */
  public randomCardName = async (): Promise<string> => {
    return this.request("randomcard.php").then((card: ResponseRandomCard) => {
      if (card.data && card.data.length > 0) {
        return card.data[0].name;
      }
    });
  };

  /**
   * This is not a cached endpoint and database_version and date are incremented when:
   * 1. New card is added to the database.
   * 2. Card information is updated/modified on the main database.
   * @returns A promise that resolves to a {@link ResponseCheckDBVersion} containing the database version information.
   */
  public checkDatabaseVersion = async (): Promise<ResponseCheckDBVersion> => {
    return this.request("checkDBVer.php");
  };
}
