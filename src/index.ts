import { YGOPro } from "./YGOPro";

const ygopro = new YGOPro();

ygopro
  .getRandomCard()
  .then((card: any) => {
    console.log("Random Card:", card);
  })
  .catch((error: string) => {
    console.error("Error fetching random card:", error);
  });
