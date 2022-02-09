import { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Links } from '../01-lazyload/components/Links/Links'
import { Spinner } from '../01-lazyload/components/Spinner/Spinner'

import logo from '../logo.svg'
import { routes } from './routes'

export const Navigation = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Router>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />

                        <Links routes={routes} />
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Switch>
                        {routes.map(({ path, component: Component }) => (
                            <Route key={path} path={path} render={() => <Component />} />
                        ))}

                        <Redirect to={routes[0].path} />
                    </Switch>
                </div>
            </Router>
        </Suspense>
    )
}
