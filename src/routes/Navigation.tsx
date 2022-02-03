import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import { routes } from './routes'

import logo from '../logo.svg'

export const Navigation = () => {
    const activateLink = (active: boolean) => (active ? 'nav-active' : '')
    //clase 37
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {routes.map(({ to, name }, i) => (
                            <li>
                                <NavLink
                                    key={i + to}
                                    to={to}
                                    className={({ isActive }) => activateLink(isActive)}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Routes>
                    {routes.map(({ path, Component }, i) => (
                        <Route key={i + path} path={path} element={<Component />} />
                    ))}

                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
