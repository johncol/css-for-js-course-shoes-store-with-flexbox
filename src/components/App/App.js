import React from "react";
import styled from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <Wrapper>
      <RelativePositionHeader />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const RelativePositionHeader = styled(Header)`
  position: relative;
  z-index: 2;
`;

const Main = styled.main`
  padding: 64px 32px;
  position: relative;
  z-index: 1;

  @media ${(props) => props.theme.queries.mobile} {
    padding: 32px 16px;
  }
`;

export default App;
