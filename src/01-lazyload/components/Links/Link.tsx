import { NavLink } from "react-router-dom";

type Props = {
  index: number;
  to: string;
  name: string;
};

export const Link = ({ index, to, name }: Props) => {
  return (
    <li>
      <NavLink to={to} activeClassName="nav-active" exact>
        {name}
      </NavLink>
    </li>
  );
};
