class Source {
  constructor (name) {
    this.name = name;
  }
}

export default {
  alchemy: new Source('Alchemy'),
  blacksmithing: new Source('Blacksmithing'),
  container: new Source('Container'),
  drop: new Source('Drop'),
  enchanting: new Source('Enchanting'),
  firstaid: new Source('First Aid'),
  fishing: new Source('Fishing'),
  herbalism: new Source('Herbalism'),
  mining: new Source('Mining'),
  quest: new Source('Quest'),
  vendor: new Source('Vendor')
};
