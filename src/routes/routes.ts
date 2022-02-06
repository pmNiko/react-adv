import { lazy, LazyExoticComponent } from 'react'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

const Lazy1 = lazy(() => import(/* webpackChunkName: "Page-1"*/'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "Page-2"*/'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "Page-3"*/'../01-lazyload/pages/LazyPage3'))

type JSXComponent = () => JSX.Element

// 6:32

/**
 * La firma permite tanto elementos cargados por
 * Lazy Load, asi como de manera tradicional.
 */
interface Route {
    to: string
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

/**
 * Rutas de navegación
 */
export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3',
    },
]
