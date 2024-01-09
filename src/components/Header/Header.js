import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import QuickActionsBar from "../QuickActionsBar";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <HeaderSection>
      <SuperHeader />
      <MainHeader>
        <EqualHorizontalSpacer>
          <Logo />
        </EqualHorizontalSpacer>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <EqualHorizontalSpacer>
          <QuickActionsBar />
        </EqualHorizontalSpacer>
      </MainHeader>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  @media ${(props) => props.theme.queries.tableAndBelow} {
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const MainHeader = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.queries.mobile} {
    padding: 0 16px;
  }
`;

const EqualHorizontalSpacer = styled.div`
  flex: 1 1 0;
`;

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

export default Header;
