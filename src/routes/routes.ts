import { lazy, LazyExoticComponent } from 'react'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element

interface Route {
    path: string
    component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const LazyPage1 = lazy(
    () => import(/*webpackChunkName: "LazyPage-1"*/ '../01-lazyload/pages/LazyPage1')
)
const LazyPage2 = lazy(
    () => import(/*webpackChunkName: "LazyPage-2"*/ '../01-lazyload/pages/LazyPage2')
)
const LazyPage3 = lazy(
    () => import(/*webpackChunkName: "LazyPage-3"*/ '../01-lazyload/pages/LazyPage3')
)

export const routes: Route[] = [
    {
        path: '/lazy1',
        component: LazyPage1,
        name: 'Lazy Page 1',
    },
    {
        path: '/lazy2',
        component: LazyPage2,
        name: 'Lazy Page 2',
    },
    {
        path: '/lazy3',
        component: LazyPage3,
        name: 'Lazy Page 3',
    },
]
