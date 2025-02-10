import type { Breakpoint, ScreenSizeMap } from "./responsive.type";

export const defaultBreakpoints: Readonly<ScreenSizeMap> = {
  xxs: 0, //* default screen that match for all screen size
  xs: 360,
  sm: 692,
  md: 768,
  lg: 1024,
  xl: 1920,
  xxl: 2560,
};

/**
 * * We focus on mobile-first responsiveness, so ensure that
 * * the responsiveArray sorts in descending order:
 * * xxl > xl > lg > md > sm > xs > xxs
 */
export const responsiveArray: Breakpoint[] = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];
