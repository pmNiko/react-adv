import { LazyPage1, LazyPage2, LazyPage3 } from '../pages'

interface RouteNested {
    pathEnd: string
    name: string
    component: () => JSX.Element
}

export const routes: RouteNested[] = [
    {
        pathEnd: '/lazy1',
        name: 'Lazy Page 1',
        component: LazyPage1,
    },
    {
        pathEnd: '/lazy2',
        name: 'Lazy Page 3',
        component: LazyPage2,
    },
    {
        pathEnd: '/lazy3',
        name: 'Lazy Page 3',
        component: LazyPage3,
    },
]
