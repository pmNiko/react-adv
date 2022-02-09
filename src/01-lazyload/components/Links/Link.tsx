import { NavLink } from 'react-router-dom'

type Props = {
    path: string
    name: string
}

export const Link = ({ path, name }: Props) => {
    return (
        <li>
            <NavLink to={path} activeClassName="nav-active" exact>
                {name}
            </NavLink>
        </li>
    )
}
