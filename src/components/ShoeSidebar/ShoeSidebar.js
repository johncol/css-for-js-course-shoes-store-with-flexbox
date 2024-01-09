import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";

const links = [
  { route: "lifestyle", label: "Lifestyle" },
  { route: "jordan", label: "Jordan" },
  { route: "running", label: "Running" },
  { route: "basketball", label: "Basketball" },
  { route: "training", label: "Training &amp; Gym" },
  { route: "football", label: "Football" },
  { route: "skateboarding", label: "Skateboarding" },
  { route: "us-football", label: "American Football" },
  { route: "baseball", label: "Baseball" },
  { route: "golf", label: "Golf" },
  { route: "tennis", label: "Tennis" },
  { route: "athletics", label: "Athletics" },
  { route: "walking", label: "Walking" },
];

const Sidebar = ({ activeCategory }) => {
  return (
    <Wrapper>
      {links.map((link) => (
        <Link
          active={activeCategory === link.route}
          href={`/${link.route}`}
          key={link.route}
        >
          {link.label}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  line-height: 2;
  color: ${(props) => (props.active ? COLORS.primary : COLORS.gray[900])};
`;

export default Sidebar;
