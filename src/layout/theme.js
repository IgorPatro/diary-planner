const theme = {
  white: "#ffffff",
  black: "#000000",
  dark: "#222222",
  gold: "#7B7646",
  yellow: "#FFDDAB",
  none: "none",
  weights: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  zIndex: (level) => level * 100,
}

export const breakpoints = {
  smartPhone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1200,
  bigDesktop: 1439,
  huge: 1700,
  extraHuge: 2100,
}

export const mediaQueries = {
  smartPhone: `(min-width: ${breakpoints.smartPhone}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  bigTablet: `(min-width: ${breakpoints.bigTablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  bigDesktop: `(min-width: ${breakpoints.bigDesktop}px)`,
  huge: `(min-width: ${breakpoints.huge}px)`,
  extraHuge: `(min-width: ${breakpoints.extraHuge}px)`,
}

export default theme
