import { Languages } from "./types/general";
import { ResponseRandomCard } from "./types/responses";

export class YGOPro {
  private static BASE_URL = "https://db.ygoprodeck.com/api/v7";

  private LANGUAGE = "en";

  constructor(public language: Languages = "en") {
    if (language !== "en") this.LANGUAGE = language;
  }

  private request(endpoint: string): any {
    const url = `${YGOPro.BASE_URL}/${endpoint}?lang=${this.LANGUAGE}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }

  public getRandomCard = async (): Promise<ResponseRandomCard> => {
    return this.request("randomcard.php");
  };
}
