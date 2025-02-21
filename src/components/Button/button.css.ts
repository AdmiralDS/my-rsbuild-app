import { style, fallbackVar } from '@vanilla-extract/css';
import { vars } from '@admiral-ds/web';

export const buttonHover = style({
  ':hover': {
    background: fallbackVar(vars.color.Primary_Primary70, '#0046E2'),
  },
});
