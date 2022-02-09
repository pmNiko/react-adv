import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element

interface Route {
    path: string
    component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const LazyLayout = lazy(
    () => import(/*webpackChunkName: "LazyLazy"*/ '../01-lazyload/layout/LazyLayout')
)

export const routes: Route[] = [
    {
        path: '/lazylayout',
        component: LazyLayout,
        name: 'Lazy Layout',
    },
    {
        path: '/nolazy',
        component: NoLazy,
        name: 'No Lazy',
    },
]
