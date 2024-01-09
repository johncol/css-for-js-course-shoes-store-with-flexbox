import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

import { CurrentBreadcrumbs } from "../Breadcrumbs/CurrentBreadcrumbs";
import ShoeGrid from "../ShoeGrid";
import ShoeSidebar from "../ShoeSidebar";
import Spacer from "../Spacer";
import { SortControl } from "./SortControl";

const ShoeIndex = (props) => {
  const activeCategory = {
    route: "running",
    label: "Running",
  };
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <HeaderLeftSection>
            <BreadcrumbsHiddenOnDesktop />
            <Title>{activeCategory.label}</Title>
          </HeaderLeftSection>
          <SortControlHiddenOnMobile {...props} />
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumnVisibleOnDesktop>
        <CurrentBreadcrumbs />
        <Spacer size={42} />
        <ShoeSidebar activeCategory={activeCategory.route} />
      </LeftColumnVisibleOnDesktop>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 32px;
`;

const LeftColumnVisibleOnDesktop = styled.div`
  flex-basis: 248px;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
`;

const HeaderLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const BreadcrumbsHiddenOnDesktop = styled(CurrentBreadcrumbs)`
  display: none;
  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: revert;
  }
`;

const SortControlHiddenOnMobile = styled(SortControl)`
  @media ${(props) => props.theme.queries.mobile} {
    display: none;
  }
`;

export default ShoeIndex;
