import sources from 'wow-tbc-classic-mats-calc/data/sources';

export class Reagent {
  constructor (id, name, source) {
    this.id = id;
    this.source = source;
    this.name = name;
  }
}

export default {
  imbuedVial: new Reagent(18256, 'Imbued Vial', sources.vendor),
  goldenbarkApple: new Reagent(4539, 'Goldenbark Apple', sources.vendor),
  soothingSpices: new Reagent(3713, 'Soothing Spices', sources.vendor),
  hotSpices: new Reagent(2692, 'Hot Spices', sources.vendor),

  terocone: new Reagent(22789, 'Terocone', sources.herbalism),
  felweed: new Reagent(22785, 'Felweed', sources.herbalism),
  ragveil: new Reagent(22787, 'Ragveil', sources.herbalism),
  felLotus: new Reagent(22794, 'Fel Lotus', sources.herbalism),
  manaThistle: new Reagent(22793, 'Mana Thistle', sources.herbalism),
  ancientLichen: new Reagent(22790, 'Ancient Lichen', sources.herbalism),
  netherbloom: new Reagent(22791, 'Netherbloom', sources.herbalism),
  nightmareVine: new Reagent(22792, 'Nightmare Vine', sources.herbalism),
  dreamingGlory: new Reagent(22786, 'Dreaming Glory', sources.herbalism),
  firebloom: new Reagent(4625, 'Firebloom', sources.herbalism),
  goldenSansam: new Reagent(13464, 'Golden Sansam', sources.herbalism),
  purpleLotus: new Reagent(8831, 'Purple Lotus', sources.herbalism),
  dreamfoil: new Reagent(13463, 'Dreamfoil', sources.herbalism),

  hugeSpottedFeltail: new Reagent(27515, 'Huge Spotted Feltail', sources.fishing),
  furiousCrawdad: new Reagent(27439, 'Furious Crawdad', sources.fishing),
  figlustersMudfish: new Reagent(27435, 'Figluster\'s Mudfish', sources.fishing),
  icefinBluefish: new Reagent(27437, 'Icefin Bluefish', sources.fishing),
  crescentTailSkullfish: new Reagent(33824, 'Crescent-Tail Skullfish', sources.fishing),
  goldenDarter: new Reagent(27438, 'Golden Darter', sources.fishing),

  warpedFlesh: new Reagent(27681, 'Warped Flesh', sources.drop),
  talbulkVenison: new Reagent(27682, 'Talbulk Venison', sources.drop),
  moteOfEarth: new Reagent(22573, 'Mote of Earth', sources.drop),
  moteOfWater: new Reagent(22578, 'Mote of Water', sources.drop),
  moteOfFire: new Reagent(22574, 'Mote of Fire', sources.drop),
  netherweaveCloth: new Reagent(21877, 'Netherweave Cloth', sources.drop),
  clefthoofMeat: new Reagent(27678, 'Clefthoof Meat', sources.drop),
  ravagerFlesh: new Reagent(27674, 'Ravager Flesh', sources.drop),
  chunkOBasilisk: new Reagent(27677, 'Chunk o\' Basilisk', sources.drop),
  serpentFlesh: new Reagent(31671, 'Serpent Flesh', sources.drop),
  bearFlank: new Reagent(35562, 'Bear Flank', sources.drop),
  buzzardMeat: new Reagent(27671, 'Buzzard Meat', sources.drop),
  strangeSpores: new Reagent(27676, 'Strange Spores', sources.drop),

  adamantiteBar: new Reagent(23446, 'Adamantite Bar', sources.mining),
  eterniumBar: new Reagent(23447, 'Eternium Bar', sources.mining),

  largeBrilliantShard: new Reagent(14344, 'Large Brilliant Shard', sources.enchanting),
  arcaneDust: new Reagent(22445, 'Arcane Dust', sources.enchanting)
};

