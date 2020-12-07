import { css,  } from "styled-components";

import { BREAKPOINTS } from "~/libs/constants";

const defaults = {
  DESKTOP: () => css``,
  TABLET: () => css``,
  SMARTPHONE: () => css``,
  PHONE: () => css``,
};

export const MEDIA =  defaults