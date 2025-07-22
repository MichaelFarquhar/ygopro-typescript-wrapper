import { ResponseRandomCard } from "./types/responses";
import { YGOPro } from "./YGOPro";

const ygopro = new YGOPro();

ygopro
  .getRandomCard()
  .then((card: ResponseRandomCard) => {
    console.log("Random Card:", card.data[0].name);
  })
  .catch((error: string) => {
    console.error("Error fetching random card:", error);
  });
