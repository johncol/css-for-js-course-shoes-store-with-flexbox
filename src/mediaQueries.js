const breakpoints = {
  mobile: 600,
  tablet: 950,
};

const defaultFontSize = 16;
const toRems = (pixels) => `${pixels / defaultFontSize}rem`;

const resolutionMediaQueries = {
  mobile:         `(max-width: ${toRems(breakpoints.mobile)})`,
  tablet:         `(min-width: ${toRems(breakpoints.mobile + 1)}) and (max-width: ${toRems(breakpoints.tablet)})`,
  desktop:        `(min-width: ${toRems(breakpoints.tablet + 1)})`,
  tabletAndBelow: `(max-width: ${toRems(breakpoints.tablet)})`,
};

const motionPreferenceMediaQueries = {
  reducedMotionPreference: `(prefers-reduced-motion: reduce)`,
  noMotionPreference:      `(prefers-reduced-motion: no-preference)`,
};

const resolutionAndMotionPreferenceMediaQueries = {
  mobileAndReducedMotionPreference:         `${resolutionMediaQueries.mobile}         and ${motionPreferenceMediaQueries.reducedMotionPreference}`,
  mobileAndNoMotionPreference:              `${resolutionMediaQueries.mobile}         and ${motionPreferenceMediaQueries.noMotionPreference}`,
  tabletAndReducedMotionPreference:         `${resolutionMediaQueries.tablet}         and ${motionPreferenceMediaQueries.reducedMotionPreference}`,
  tabletAndNoMotionPreference:              `${resolutionMediaQueries.tablet}         and ${motionPreferenceMediaQueries.noMotionPreference}`,
  desktopAndReducedMotionPreference:        `${resolutionMediaQueries.desktop}        and ${motionPreferenceMediaQueries.reducedMotionPreference}`,
  desktopAndNoMotionPreference:             `${resolutionMediaQueries.desktop}        and ${motionPreferenceMediaQueries.noMotionPreference}`,
  tabletAndBelowAndReducedMotionPreference: `${resolutionMediaQueries.tabletAndBelow} and ${motionPreferenceMediaQueries.reducedMotionPreference}`,
  tabletAndBelowAndNoMotionPreference:      `${resolutionMediaQueries.tabletAndBelow} and ${motionPreferenceMediaQueries.noMotionPreference}`,
}

export const mediaQueries = {
  ...resolutionMediaQueries,
  ...motionPreferenceMediaQueries,
  ...resolutionAndMotionPreferenceMediaQueries,
};
