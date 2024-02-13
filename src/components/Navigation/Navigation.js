import styled from "styled-components";
import Icon from "../Icon";
import { useModalEffects } from "./useModalEffects";
import { mediaQueries } from "../../mediaQueries";

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
              <ContentOnHover>{link.label}</ContentOnHover>
            </NavLink>
          ))}
        </Nav>
      </NavWrapperOnMobile>
    </Wrapper>
  );
};

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
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
`;

const AnimatedLinkContent = styled.span`
  display: block;

  ${NavLink}:hover &,
  ${NavLink}:focus & {
    transform: translateY(-100%);
  }

  @media ${mediaQueries.noMotionPreference} {
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
