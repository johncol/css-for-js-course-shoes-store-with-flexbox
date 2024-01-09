import styled from "styled-components";
import Icon from "../Icon";

export const QuickActionsBar = () => {
  return (
    <ActionsList>
      <Action>
        <StyledIcon id={"shopping-bag"} />
      </Action>
      <Action>
        <StyledIcon id={"search"} />
      </Action>
      <Action>
        <StyledIcon id={"menu"} />
      </Action>
    </ActionsList>
  );
};

const ActionsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 26px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  @media ${(props) => props.theme.queries.desktop} {
    display: none;
  }
`;

const Action = styled.li`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  height: 24px;
  width: 24px;
`;
