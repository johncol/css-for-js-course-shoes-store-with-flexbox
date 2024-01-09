const breakpoints = {
  mobile: 600,
  tablet: 950,
};

const defaultFontSize = 16;
const toRems = (pixels) => `${pixels / defaultFontSize}rem`;

export const mediaQueries = {
  mobile: `(max-width: ${toRems(breakpoints.mobile)})`,
  tablet: `(min-width: ${toRems(
    breakpoints.mobile + 1
  )}) and (max-width: ${toRems(breakpoints.tablet)})`,
  desktop: `(min-width: ${toRems(breakpoints.tablet + 1)})`,
};

console.log('mediaQueries:', mediaQueries);
