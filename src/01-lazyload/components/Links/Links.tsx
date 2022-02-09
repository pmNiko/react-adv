import { Link } from './Link'
import { routes } from '../../../routes/routes'

export const Links = () => {
    return (
        <ul>
            {routes.map((route, i) => (
                <Link key={i} {...route} />
            ))}
        </ul>
    )
}
