import { ResponseAllCardSets, ResponseCardArchetypes, ResponseRandomCard } from "./types/responses";
import { YGOPro } from "./YGOPro";

const ygopro = new YGOPro();

ygopro
  .randomCard()
  .then((card: ResponseRandomCard) => {
    console.log("Random Card:", card.data[0].name);
  })
  .catch((error: string) => {
    console.error("Error fetching random card:", error);
  });

ygopro.cardSetInfo({ setCode: "SDY-001" }).then((output: ResponseAllCardSets) => {
  console.log("Output", output);
});

// const runTest = async () => {
//   const randomCardName = await ygopro.getRandomCardName();
//   console.log("Random Card Name:", randomCardName);
// };

// runTest();
