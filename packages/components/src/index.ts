import Header from './Header/Header';
import Text from './Text/Text';
import { HTMLAttributes } from 'react';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'wc-header': HTMLAttributes<HTMLHtmlElement>;
    }
    interface IntrinsicElements {
      'wc-text': HTMLAttributes<HTMLParagraphElement>;
    }
  }
}

const register = (name: string, component: CustomElementConstructor) => {
  if (!globalThis.customElements.get(name)) {
    globalThis.customElements.define(name, component);
  }
};

export const setup = () => {
  if (globalThis.customElements) {
    register('wc-header', Header);
    register('wc-text', Text);
  }
};
