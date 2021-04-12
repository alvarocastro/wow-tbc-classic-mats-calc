import sources from 'wow-tbc-classic-mats-calc/data/sources';
import reagents from 'wow-tbc-classic-mats-calc/data/reagents';

class Consumable {
  constructor (id, name, source, reagents) {
    this.id = id;
    this.name = name;
    this.source = source;
    this.reagents = reagents;
  }
}

export default {
  elixirOfMajorAgility: new Consumable(22831, 'Elixir of Major Agility', sources.alchemy, [
    { reagent: reagents.terocone, amount: 1 },
    { reagent: reagents.felweed, amount: 2 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorFortitude: new Consumable(32062, 'Elixir of Major Fortitude', sources.alchemy, [
    { reagent: reagents.ragveil, amount: 2 },
    { reagent: reagents.felweed, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfFortification: new Consumable(22851, 'Flask of Fortification', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.ancientLichen, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  ironshieldPotion: new Consumable(22849, 'Ironshield Potion', sources.alchemy, [
    { reagent: reagents.ancientLichen, amount: 2 },
    { reagent: reagents.moteOfEarth, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  heroicPotion: new Consumable(22837, 'Heroic Potion', sources.alchemy, [
    { reagent: reagents.terocone, amount: 2 },
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfRelentlessAssault: new Consumable(22854, 'Flask of Relentless Assault', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.terocone, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  hastePotion: new Consumable(22838, 'Haste Potion', sources.alchemy, [
    { reagent: reagents.terocone, amount: 2 },
    { reagent: reagents.netherbloom, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  insaneStrengthPotion: new Consumable(22828, 'Insane Strength Potion', sources.alchemy, [
    { reagent: reagents.terocone, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfPureDeath: new Consumable(22866, 'Flask of Pure Death', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.nightmareVine, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorShadowPower: new Consumable(22835, 'Elixir of Major Shadow Power', sources.alchemy, [
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.nightmareVine, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfDraenicWisdom: new Consumable(32067, 'Elixir of Draenic Wisdom', sources.alchemy, [
    { reagent: reagents.felweed, amount: 1 },
    { reagent: reagents.terocone, amount: 118256 }
  ]),
  destructionPotion: new Consumable(22839, 'Destruction Potion', sources.alchemy, [
    { reagent: reagents.nightmareVine, amount: 2 },
    { reagent: reagents.netherbloom, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  superManaPotion: new Consumable(22832, 'Super Mana Potion', sources.alchemy, [
    { reagent: reagents.dreamingGlory, amount: 2 },
    { reagent: reagents.felweed, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfHealingPower: new Consumable(22825, 'Elixir of Healing Power', sources.alchemy, [
    { reagent: reagents.goldenSansam, amount: 1 },
    { reagent: reagents.dreamingGlory, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfMightyRestoration: new Consumable(22853, 'Flask of Mighty Restoration', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.dreamingGlory, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  majorDreamlessSleepPotion: new Consumable(22836, 'Major Dreamless Sleep Potion', sources.alchemy, [
    { reagent: reagents.dreamingGlory, amount: 1 },
    { reagent: reagents.nightmareVine, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorMageblood: new Consumable(22840, 'Elixir of Major Mageblood', sources.alchemy, [
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.netherbloom, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfBlindingLight: new Consumable(22861, 'Flask of Blinding Light', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.netherbloom, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  adeptsElixir: new Consumable(28103, 'Adept\'s Elixir', sources.alchemy, [
    { reagent: reagents.dreamfoil, amount: 1 },
    { reagent: reagents.felweed, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorFrostPower: new Consumable(22827, 'Elixir of Major Frost Power', sources.alchemy, [
    { reagent: reagents.moteOfWater, amount: 2 },
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorFirepower: new Consumable(22833, 'Elixir of Major Firepower', sources.alchemy, [
    { reagent: reagents.moteOfFire, amount: 2 },
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorDefense: new Consumable(22834, 'Elixir of Major Defense', sources.alchemy, [
    { reagent: reagents.ancientLichen, amount: 3 },
    { reagent: reagents.terocone, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  adamantiteSharpeningStone: new Consumable(23529, 'Adamantite Sharpening Stone', sources.blacksmithing, [
    { reagent: reagents.adamantiteBar, amount: 1 },
    { reagent: reagents.moteOfEarth, amount: 2 }
  ]),
  adamantiteWeightstone: new Consumable(28421, 'Adamantite Weightstone', sources.blacksmithing, [
    { reagent: reagents.adamantiteBar, amount: 1 },
    { reagent: reagents.netherweaveCloth, amount: 2 }
  ]),
  greaterWardOfShielding: new Consumable(23576, 'Greater Ward of Shielding', sources.blacksmithing, [
    { reagent: reagents.eterniumBar, amount: 1 }
  ]),
  fishermansFeast: new Consumable(33052, 'Fisherman\'s Feast', sources.cooking, [
    { reagent: reagents.hugeSpottedFeltail, amount: 1 },
    { reagent: reagents.goldenbarkApple, amount: 5 },
    { reagent: reagents.soothingSpices, amount: 5 }
  ]),
  spicyCrawdad: new Consumable(27667, 'Spicy Crawdad', sources.cooking, [
    { reagent: reagents.furiousCrawdad, amount: 1 }
  ]),
  grilledMudfish: new Consumable(27664, 'Grilled Mudfish', sources.cooking, [
    { reagent: reagents.figlustersMudfish, amount: 1 }
  ]),
  warpBurger: new Consumable(27659, 'Warp Burger', sources.cooking, [
    { reagent: reagents.warpedFlesh, amount: 1 }
  ]),
  spicyHotTalbuk: new Consumable(33872, 'Spicy Hot Talbuk', sources.cooking, [
    { reagent: reagents.talbulkVenison, amount: 1 },
    { reagent: reagents.hotSpices, amount: 1 }
  ]),
  roastedClefthoof: new Consumable(27658, 'Roasted Clefthoof', sources.cooking, [
    { reagent: reagents.clefthoofMeat, amount: 1 }
  ]),
  ravagerDog: new Consumable(27655, 'Ravager Dog', sources.cooking, [
    { reagent: reagents.ravagerFlesh, amount: 1 }
  ]),
  blackenedBasilisk: new Consumable(27657, 'Blackened Basilisk', sources.cooking, [
    { reagent: reagents.chunkOBasilisk, amount: 1 }
  ]),
  crunchySerpent: new Consumable(31673, 'Crunchy Serpent', sources.cooking, [
    { reagent: reagents.serpentFlesh, amount: 1 }
  ]),
  poachedBluefish: new Consumable(27665, 'Poached Bluefish', sources.cooking, [
    { reagent: reagents.icefinBluefish, amount: 1 }
  ]),
  skullfishSoup: new Consumable(33825, 'Skullfish Soup', sources.cooking, [
    { reagent: reagents.crescentTailSkullfish, amount: 1 }
  ]),
  juicyBearBurger: new Consumable(35565, 'Juicy Bear Burger', sources.cooking, [
    { reagent: reagents.bearFlank, amount: 1 }
  ]),
  goldenFishSticks: new Consumable(27666, 'Golden Fish Sticks', sources.cooking, [
    { reagent: reagents.goldenDarter, amount: 1 }
  ]),
  kiblersBits: new Consumable(33874, 'Kibler\'s Bits', sources.cooking, [
    { reagent: reagents.buzzardMeat, amount: 1 }
  ]),
  sporelingSnack: new Consumable(27656, 'Sporeling Snack', sources.cooking, [
    { reagent: reagents.strangeSpores, amount: 1 }
  ]),
  brilliantWizardOil: new Consumable(20749, 'Brilliant Wizard Oil', sources.enchanting, [
    { reagent: reagents.largeBrilliantShard, amount: 2 },
    { reagent: reagents.firebloom, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  superiorWizardOil: new Consumable(22522, 'Superior Wizard Oil', sources.enchanting, [
    { reagent: reagents.arcaneDust, amount: 3 },
    { reagent: reagents.nightmareVine, amount: 118256 }
  ]),
  brilliantManaOil: new Consumable(20748, 'Brilliant Mana Oil', sources.enchanting, [
    { reagent: reagents.largeBrilliantShard, amount: 2 },
    { reagent: reagents.purpleLotus, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  superiorManaOil: new Consumable(22521, 'Superior Mana Oil', sources.enchanting, [
    { reagent: reagents.arcaneDust, amount: 3 },
    { reagent: reagents.netherbloom, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ])
};
