import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

export const Navigation = () => {
  return (
    <Nav>
      <NavLink href="/sale">Sale</NavLink>
      <NavLink href="/new">New&nbsp;Releases</NavLink>
      <NavLink href="/men">Men</NavLink>
      <NavLink href="/women">Women</NavLink>
      <NavLink href="/kids">Kids</NavLink>
      <NavLink href="/collections">Collections</NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0 3vw;
  padding: 26px 16px;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    /* temporarily hide nav in tabletAndBelow */
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;
