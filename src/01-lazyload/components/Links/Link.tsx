import { NavLink } from 'react-router-dom'

type Props = {
    path: string
    name: string
    matchExact?: boolean
}

export const Link = ({ path, name, matchExact = true }: Props) => {
    return (
        <li>
            <NavLink to={path} activeClassName="nav-active" exact={matchExact}>
                {name}
            </NavLink>
        </li>
    )
}
