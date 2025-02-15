import type { PropsWithChildren } from "react";

//* Define all breakpoints use in the application
export type Breakpoint = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export type ScreenSizeMap = Record<Breakpoint, number>;

export type MediaQueryMap = Record<Breakpoint, string>;

export type ScreenMap = Record<Breakpoint, boolean>;

export type MatchHandlers = Record<
  Breakpoint,
  | {
      mql: MediaQueryList;
      handler: (this: MediaQueryList, ev: MediaQueryListEvent) => any;
    }
  | undefined
>;

export type ResponsiveContextState = ScreenMap;

export type ResponsiveProviderProps = PropsWithChildren<{
  value?: ScreenSizeMap;
}>;
