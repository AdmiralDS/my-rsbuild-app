import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/vars.css.ts';

export const hover = style({
  ':hover': {
    background: vars.color.Primary_Primary70,
  },
});
