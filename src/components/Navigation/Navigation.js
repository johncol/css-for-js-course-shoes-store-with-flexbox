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
      <CloseButton onClick={onClose} menuOpenInMobile={menuOpenInMobile} />
      <Nav>
        {links.map((link) => (
          <NavLink onClick={onClose} href={link.href} key={link.href}>
            <DefaultContent>{link.label}</DefaultContent>
            <ContentOnHover>{link.label}</ContentOnHover>
          </NavLink>
        ))}
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-white);

    justify-content: stretch;
    align-items: stretch;
    display: ${(props) => (props.menuOpenInMobile ? "flex" : "none")};
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

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: ${(props) => (props.menuOpenInMobile ? "block" : "none")};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0 clamp(1.5rem, 13vw - 8rem, 5rem);
  padding: 26px 16px;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    flex: 1;
    flex-direction: column;
    align-items: center;
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
