import React from "react";
import styled from "styled-components/macro";

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
  font-weight: var(--font-weight-medium);
  line-height: 2;
  color: var(
    ${(props) => (props.active ? '--color-primary' : '--color-gray-900')}
  );
`;

export default Sidebar;
