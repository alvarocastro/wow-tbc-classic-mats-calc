import Component from '@glimmer/component';

export default class ReagentsListComponent extends Component {
  get rows () {
    return this.args.shopList;
  }
}
