import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CraftablesListComponent extends Component {
  @service tracking;
  @tracked isInputMode = true;

  get rows () {
    return this.args.craftables;
  }

  @action setAmount (row, amount) {
    this.tracking.trackSetItemAmount(row.item.name, amount);
    row.setAmount(Math.max(amount, 0));
    this.args.onChangeCraftables();
  }

  @action setVisibility (row, visibility) {
    if (visibility) {
      this.tracking.trackShowItem(row.item.name);
      row.show();
    } else {
      this.tracking.trackHideItem(row.item.name);
      row.hide();
    }
    this.args.onChangeCraftables();
  }

  @action toggleMode () {
    this.isInputMode = !this.isInputMode;
    if (this.isInputMode) {
      this.tracking.trackSetInputMode();
    } else {
      this.tracking.trackSetVisibilityMode();
    }
  }
}
