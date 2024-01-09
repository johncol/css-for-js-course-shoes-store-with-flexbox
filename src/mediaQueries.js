const breakpoints = {
  phone: 600,
  tablet: 950,
};

const defaultFontSize = 16;
const toRems = (pixels) => `${pixels / defaultFontSize}rem`;

export const mediaQueries = {
  phone: `(max-width: ${toRems(breakpoints.phone)})`,
  tablet: `(min-width: ${toRems(
    breakpoints.phone + 1
  )}) and (max-width: ${toRems(breakpoints.tablet)})`,
  desktop: `(min-width: ${toRems(breakpoints.tablet + 1)})`,
};

console.log('mediaQueries:', mediaQueries);
