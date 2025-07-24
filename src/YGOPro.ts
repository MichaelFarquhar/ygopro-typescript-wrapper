import { Languages } from "./types/general";
import { ResponseCheckDBVersion, ResponseRandomCard } from "./types/responses";

export class YGOPro {
  private static BASE_URL = "https://db.ygoprodeck.com/api/v7";

  private LANGUAGE = "en";

  constructor(public language: Languages = "en") {
    if (language !== "en") this.LANGUAGE = language;
  }

  private request(endpoint: string): any {
    const url = `${YGOPro.BASE_URL}/${endpoint}${
      endpoint === "cardinfo.php" ? `?language=${this.LANGUAGE}` : ""
    }`;

    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }

  /**
   * Retrieves a random card's data from the YGOPro API.
   * @returns A promise that resolves to a {@link ResponseRandomCard} containing the details of the random card.
   */
  public getRandomCard = async (): Promise<ResponseRandomCard> => {
    return this.request("randomcard.php");
  };

  /**
   * Retrieves the name of a random card from the YGOPro API. This does not return the full card data, only the name string.
   * @returns A promise that resolves to the string name of a random card.
   */
  public getRandomCardName = async (): Promise<string> => {
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
