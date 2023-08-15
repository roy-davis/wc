import { HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wc-text': HTMLAttributes<HTMLParagraphElement>;
    }
    interface IntrinsicElements {
      'wc-header': HTMLAttributes<HTMLHtmlElement>;
    }
  }
}
