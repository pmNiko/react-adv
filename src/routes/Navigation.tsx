import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { routes } from './routes'

import logo from '../logo.svg'

export const Navigation = () => {
    const activateLink = (active: boolean) => (active ? 'nav-active' : '')

    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {routes.map(({ to, name }, i) => (
                                <li key={i + to}>
                                    <NavLink
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
        </Suspense>
    )
}
