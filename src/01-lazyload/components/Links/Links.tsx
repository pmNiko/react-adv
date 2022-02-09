import { Route } from '../../../routes/routes'
import { Link } from './Link'

type Routes = {
    routes: Route[]
}

export const Links = ({ routes }: Routes) => {
    return (
        <ul>
            {routes.map((route: Route) => (
                <Link key={route.path} {...route} matchExact={false} />
            ))}
        </ul>
    )
}
