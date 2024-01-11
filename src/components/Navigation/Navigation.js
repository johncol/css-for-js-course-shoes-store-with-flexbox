import styled from "styled-components";
import Icon from "../Icon";
import { useCallback, useEffect } from "react";

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
            {link.label}
          </NavLink>
        ))}
      </Nav>
    </Wrapper>
  );
};

const useModalEffects = (menuOpenInMobile, onClose) => {
  const handleEscape = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape]);

  useEffect(() => {
    if (menuOpenInMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpenInMobile]);
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
  gap: 0 clamp(0.5rem, 3vw, 3rem);
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

  &:hover,
  &:focus {
    color: var(--color-secondary);
  }
`;
