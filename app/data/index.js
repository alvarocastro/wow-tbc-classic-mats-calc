import { tracked } from '@glimmer/tracking';
import store from 'store2';
import consumables from 'wow-tbc-classic-mats-calc/data/consumables';

class Craftable {
  @tracked amount;
  @tracked hidden;

  constructor (item, amount, { hidden }) {
    this.item = item;
    const saved = this.load();

    this.amount = saved?.amount ?? Number(amount);
    this.hidden = saved?.hidden ?? Boolean(hidden);
  }

  load () {
    return store.get(`craft_${this.item.id}`);
  }

  persist () {
    store.set(`craft_${this.item.id}`, {
      amount: this.amount,
      hidden: this.hidden
    });
  }

  hide () {
    this.hidden = true;
    this.persist();
  }

  show () {
    this.hidden = false;
    this.persist();
  }

  setAmount (amount = 0) {
    this.amount = Number(amount);
    this.persist();
  }
}

export default [
  // Util Pots
  new Craftable(consumables.heroicPotion, 0, { hidden: false }),
  new Craftable(consumables.hastePotion, 0, { hidden: false }),
  new Craftable(consumables.insaneStrengthPotion, 0, { hidden: false }),
  new Craftable(consumables.destructionPotion, 0, { hidden: false }),
  new Craftable(consumables.ironshieldPotion, 0, { hidden: false }),

  // Battle Elixir
  new Craftable(consumables.elixirOfMajorAgility, 0, { hidden: false }),
  new Craftable(consumables.adeptsElixir, 0, { hidden: false }),
  new Craftable(consumables.elixirOfMajorShadowPower, 0, { hidden: false }),
  new Craftable(consumables.elixirOfMajorFrostPower, 0, { hidden: false }),
  new Craftable(consumables.elixirOfMajorFirepower, 0, { hidden: false }),

  // Guardian Elixir
  new Craftable(consumables.elixirOfMajorDefense, 0, { hidden: false }),
  new Craftable(consumables.elixirOfDraenicWisdom, 0, { hidden: false }),
  new Craftable(consumables.elixirOfMajorFortitude, 0, { hidden: false }),
  new Craftable(consumables.elixirOfMajorMageblood, 0, { hidden: false }),

  // Flask
  new Craftable(consumables.flaskOfFortification, 0, { hidden: true }),
  new Craftable(consumables.flaskOfRelentlessAssault, 0, { hidden: true }),
  new Craftable(consumables.flaskOfPureDeath, 0, { hidden: true }),
  new Craftable(consumables.flaskOfMightyRestoration, 0, { hidden: true }),
  new Craftable(consumables.flaskOfBlindingLight, 0, { hidden: true }),

  // Restoration
  new Craftable(consumables.superManaPotion, 0, { hidden: true }),
  new Craftable(consumables.elixirOfHealingPower, 0, { hidden: true }),
  new Craftable(consumables.majorDreamlessSleepPotion, 0, { hidden: true }),

  // Weapon
  new Craftable(consumables.superiorWizardOil, 0, { hidden: false }),
  new Craftable(consumables.brilliantWizardOil, 0, { hidden: true }),
  new Craftable(consumables.superiorManaOil, 0, { hidden: false }),
  new Craftable(consumables.brilliantManaOil, 0, { hidden: true }),
  new Craftable(consumables.adamantiteSharpeningStone, 0, { hidden: false }),
  new Craftable(consumables.adamantiteWeightstone, 0, { hidden: true }),
  new Craftable(consumables.greaterWardOfShielding, 0, { hidden: true }),

  // Food
  new Craftable(consumables.fishermansFeast, 0, { hidden: false }),
  new Craftable(consumables.spicyCrawdad, 0, { hidden: false }),
  new Craftable(consumables.grilledMudfish, 0, { hidden: false }),
  new Craftable(consumables.warpBurger, 0, { hidden: false }),
  new Craftable(consumables.spicyHotTalbuk, 0, { hidden: false }),
  new Craftable(consumables.roastedClefthoof, 0, { hidden: false }),
  new Craftable(consumables.ravagerDog, 0, { hidden: false }),
  new Craftable(consumables.blackenedBasilisk, 0, { hidden: false }),
  new Craftable(consumables.crunchySerpent, 0, { hidden: false }),
  new Craftable(consumables.poachedBluefish, 0, { hidden: false }),
  new Craftable(consumables.skullfishSoup, 0, { hidden: false }),
  new Craftable(consumables.goldenFishSticks, 0, { hidden: false }),
  new Craftable(consumables.juicyBearBurger, 0, { hidden: false }),

  // Pet Food
  new Craftable(consumables.kiblersBits, 0, { hidden: true }),
  new Craftable(consumables.sporelingSnack, 0, { hidden: true }),
];
