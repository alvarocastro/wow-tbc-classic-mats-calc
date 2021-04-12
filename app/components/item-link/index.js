/* global $WowheadPower */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { debounce } from '@ember/runloop';

const refreshWowheadLinks = function () {
  try {
    $WowheadPower.refreshLinks();
  } catch (e) {
    // Fail silently
  }
};

export default class ItemLinkComponent extends Component {
  @action refreshWowheadTooltips () {
    debounce(null, refreshWowheadLinks, 10, true);
  }
}
