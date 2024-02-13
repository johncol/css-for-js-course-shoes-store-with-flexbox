import styled, { keyframes } from "styled-components";
import Icon from "../Icon";
import { useModalEffects } from "./useModalEffects";

const links = [
  {
    href: "/sale",
    label: "Sale",
  },
  {
    href: "/new",
    label: "New Releases",
  },
  {
    href: "/men",
    label: "Men",
  },
  {
    href: "women",
    label: "Women",
  },
  {
    href: "/kids",
    label: "Kids",
  },
  {
    href: "/collections",
    label: "Collections",
  },
];

const animationTiming = {
  backdropFadeIn: "450ms",
  navSlideIn: "350ms",
  navSlideInDelay: "200ms",
  navContentAppearDelay: "550ms",
};

export const Navigation = ({ className, menuOpenInMobile, onClose }) => {
  useModalEffects(menuOpenInMobile, onClose);

  return (
    <Wrapper menuOpenInMobile={menuOpenInMobile} className={className}>
      <Backdrop menuOpenInMobile={menuOpenInMobile} onClick={onClose} />
      <CloseButton onClick={onClose} menuOpenInMobile={menuOpenInMobile} />
      <NavWrapperOnMobile>
        <Nav>
          {links.map((link) => (
            <NavLink onClick={onClose} href={link.href} key={link.href}>
              <DefaultContent>{link.label}</DefaultContent>
              <ContentOnHover aria-hidden>{link.label}</ContentOnHover>
            </NavLink>
          ))}
        </Nav>
      </NavWrapperOnMobile>
    </Wrapper>
  );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideFromTheRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Wrapper = styled.div`
  position: relative;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: ${(props) => (props.menuOpenInMobile ? "block" : "none")};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

const Backdrop = styled.div`
  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: ${(props) => (props.menuOpenInMobile ? "block" : "none")};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media ${(props) => props.theme.queries.tabletAndBelowAndNoMotionPreference} {
    animation: ${FadeIn} ${animationTiming.backdropFadeIn} ease;
  }
`;

const CloseButton = styled(Icon).attrs({ id: "close" })`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
  z-index: 1;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: ${(props) => (props.menuOpenInMobile ? "block" : "none")};
  }

  @media ${(props) => props.theme.queries.tabletAndBelowAndNoMotionPreference} {
    opacity: 0;
    animation: ${FadeIn} ${animationTiming.navSlideIn} ease forwards;
    animation-delay: ${animationTiming.navContentAppearDelay};
  }
`;

const NavWrapperOnMobile = styled.div`
  @media ${(props) => props.theme.queries.tabletAndBelow} {
    background-color: var(--color-white);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: min(100%, 350px);

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${(props) => props.theme.queries.tabletAndBelowAndNoMotionPreference} {
    animation: ${SlideFromTheRight} ${animationTiming.navSlideIn} ease-in-out
      both;
    animation-delay: ${animationTiming.navSlideInDelay};
  }
`;

const Nav = styled.nav`
  padding: 26px 16px;
  display: flex;
  gap: 0 clamp(1.5rem, 13vw - 8rem, 5rem);
  justify-content: center;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    padding-left: 32px;
    gap: 32px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

const NavLink = styled.a`
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.queries.tabletAndBelowAndNoMotionPreference} {
    opacity: 0;
    animation: ${FadeIn} ${animationTiming.navContentAppearDelay} ease-in both;

    --base-delay: 300ms;
    --delta-delay: 100ms;

    &:nth-of-type(1) {
      animation-delay: calc(var(--base-delay) + var(--delta-delay));
    }

    &:nth-of-type(2) {
      animation-delay: calc(var(--base-delay) + var(--delta-delay) * 1);
    }

    &:nth-of-type(3) {
      animation-delay: calc(var(--base-delay) + var(--delta-delay) * 2);
    }

    &:nth-of-type(4) {
      animation-delay: calc(var(--base-delay) + var(--delta-delay) * 3);
    }

    &:nth-of-type(5) {
      animation-delay: calc(var(--base-delay) + var(--delta-delay) * 4);
    }

    &:nth-of-type(6) {
      animation-delay: calc(var(--base-delay) + var(--delta-delay) * 5);
    }
  }
`;

const AnimatedLinkContent = styled.span`
  display: block;

  ${NavLink}:hover &,
  ${NavLink}:focus & {
    transform: translateY(-100%);
  }

  @media ${(props) => props.theme.queries.noMotionPreference} {
    transition: transform 400ms ease;

    ${NavLink}:hover &,
    ${NavLink}:focus & {
      transition: transform 250ms ease-in-out;
    }
  }
`;

const DefaultContent = styled(AnimatedLinkContent)``;

const ContentOnHover = styled(AnimatedLinkContent)`
  color: var(--color-secondary);
  position: absolute;
`;
