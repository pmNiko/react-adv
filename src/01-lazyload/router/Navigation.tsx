import { Link, useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'

export const Navigation = () => {
    const { path, url } = useRouteMatch()

    return (
        <>
            <h2>LazyLayout Pages</h2>
            <ul>
                {routes.map(({ pathEnd, name }) => (
                    <li key={pathEnd}>
                        <Link to={`${url}${pathEnd}`}> {name}</Link>
                    </li>
                ))}
            </ul>
            <Switch>
                {routes.map(({ pathEnd, component: Component }, i) => (
                    <Route key={i + pathEnd} exact path={`${path}${pathEnd}`}>
                        <Component />
                    </Route>
                ))}

                <Redirect to={`${path}${routes[0].pathEnd}`} />
            </Switch>
        </>
    )
}
