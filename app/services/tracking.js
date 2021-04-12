/* global gtag */
import Service from '@ember/service';
import { debug } from '@ember/debug';
import config from 'wow-tbc-classic-mats-calc/config/environment';

export default class TrackingService extends Service {
  track (event, props) {
    if (config.environment === 'production') {
      return gtag('event', event, props);
    }
    return true;
  }

  trackHideWelcomeMessage () {
    debug('[tracking] trackHideWelcomeMessage');
    return this.track('hideWelcomeMessage');
  }

  trackHideHeadsUpMessage () {
    debug('[tracking] trackHideHeadsUpMessage');
    return this.track('hideHeadsUpMessage');
  }

  trackSetItemAmount (itemName, amount) {
    debug(`[tracking] trackSetItemAmount: ${itemName} ${amount}`);
    return this.track('setConsumableAmount', {
      itemName,
      amount
    });
  }

  trackHideItem (itemName) {
    debug(`[tracking] trackHideItem: ${itemName}`);
    return this.track('hideConsumable', {
      itemName
    });
  }

  trackShowItem (itemName) {
    debug(`[tracking] trackShowItem ${itemName}`);
    return this.track('showConsumable', {
      itemName
    });
  }

  trackSetInputMode () {
    debug('[tracking] trackSetInputMode');
    return this.track('setConsumablesMode', {
      mode: 'Input'
    })
  }

  trackSetVisibilityMode () {
    debug('[tracking] trackSetVisibilityMode');
    return this.track('setConsumablesMode', {
      mode: 'Visibility'
    })
  }

  trackUseTwoColumnsLayout () {
    debug('[tracking] trackUseTwoColumnsLayout');
    return this.track('setLayout', {
      layout: 'Two columns'
    });
  }

  trackUseOneColumnLayout () {
    debug('[tracking] trackUseOneColumnLayout');
    return this.track('setLayout', {
      layout: 'One column'
    });
  }

  trackClearData () {
    debug('[tracking] trackClearData');
    return this.track('clearData');
  }
}
