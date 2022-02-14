import { Route } from '../../../routes/routes'
import { Link } from './Link'

/* Pueden implementarse de cualquiera de las dos formas */
// type Routes = {
//     routes: Route[]
// }

export const Links = ({ routes }: { routes: Route[] }) => {
    return (
        <ul>
            {routes.map((route: Route) => (
                <Link key={route.path} {...route} matchExact={false} />
            ))}
        </ul>
    )
}
