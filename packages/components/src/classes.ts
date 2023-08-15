// this selements are all void/self closing
function isVoidElement(element: Element) {
  return [
    'area',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
  ].includes(element.tagName.toLowerCase());
}

export abstract class WCBase extends HTMLElement {
  root?: Element | null;
  render?(): void;
  setStyle(stylesheet?: string) {
    if (stylesheet) {
      const style = document.createElement('style');
      style.innerText = stylesheet;
      if (this.shadowRoot) this.shadowRoot.appendChild(style);
    }
  }
}

export abstract class HTMLBase extends WCBase {
  constructor(element: string, stylesheet?: string) {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.setStyle(stylesheet);
    shadowRoot.appendChild(document.createElement(element));
    this.root = shadowRoot.querySelector(element);
    // dont add a slot for anything that can't have one
    if (this.root && !isVoidElement(this.root))
      this.root.innerHTML = '<slot></slot>';
  }
}

export abstract class TemplateBase extends WCBase {
  constructor(html: string, stylesheet?: string) {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.setStyle(stylesheet);
    const template = document.createElement('template');
    template.innerHTML = html;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
