import { NavLink } from 'react-router-dom'

type Props = {
    index: number
    path: string
    name: string
}

export const Link = ({ index, path, name }: Props) => {
    return (
        <li>
            <NavLink to={path} activeClassName="nav-active" exact>
                {name}
            </NavLink>
        </li>
    )
}
