import { HTMLBase } from '../classes';

export default class Text extends HTMLBase {
  constructor() {
    super('p');
    if (this.root) this.root.innerHTML = '<slot></slot>';
  }
}
