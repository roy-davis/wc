import { TemplateBase } from '../classes';
import style from './header.css?raw';
import html from './template.html?raw';

export default class Header extends TemplateBase {
  constructor() {
    super(html, style);
  }
}
