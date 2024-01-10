import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "../../constants";
import Logo from "../Logo";
import Navigation from "../Navigation";
import QuickActionsBar from "../QuickActionsBar";
import SuperHeader from "../SuperHeader";

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
        <Navigation />
        <EqualHorizontalSpacer>
          <QuickActionsBar />
        </EqualHorizontalSpacer>
      </MainHeader>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  @media ${(props) => props.theme.queries.tabletAndBelow} {
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const MainHeader = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.queries.mobile} {
    padding: 0 16px;
  }
`;

const EqualHorizontalSpacer = styled.div`
  flex: 1 1 0;
`;

export default Header;
