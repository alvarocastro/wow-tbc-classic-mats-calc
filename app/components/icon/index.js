import Component from '@glimmer/component';

const faIcons = {
  visible: ['fas', 'eye'],
  hidden: ['fas', 'eye-slash'],
  calculator: ['fas', 'calculator'],
  discord: ['fab', 'discord'],
  config: ['fas', 'cog'],
  columns: ['fas', 'columns'],
  list: ['fas', 'list']
};

export default class IconComponent extends Component {
  get name () {
    const name = this.args.name;

    return faIcons[name][1];
  }

  get prefix () {
    const name = this.args.name;

    return faIcons[name][0];
  }
}
