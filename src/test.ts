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

ygopro
  .cards({
    fname: "Dark Magician",
  })
  .then((cards: any) => {
    console.log("Cards matching 'Dark Magician':", cards.data);
  })
  .catch((error: string) => {
    console.error("Error fetching cards:", error);
  });

// ygopro.cardSetInfo({ setCode: "SDY-001" }).then((output: ResponseAllCardSets) => {
//   console.log("Output", output);
// });

// console.log(ygopro.imageUrl({ cardId: "42901635", imageType: "cropped" }));

// const runTest = async () => {
//   const randomCardName = await ygopro.getRandomCardName();
//   console.log("Random Card Name:", randomCardName);
// };

// runTest();
