import {CompList, ErrorPage, HomeContainer, SteamAuth, SuggestForm} from "../../views/pages";

export const authRoutes = [
    {
        path: '/compositions',
        exact: true,
        auth: false,
        component: CompList
    },
    {
        path: '/suggest',
        exact: true,
        auth: true,
        component: SuggestForm
    },
    {
        path: '/auth/steam',
        exact: true,
        auth: false,
        component: SteamAuth
    }
];

export const publicRoutes = [
    {
        path: '/',
        exact: true,
        component: HomeContainer
    },
    // {
    //     path: '/compositions',
    //     exact: true,
    //     component: CompList
    // },
    {
        path: '*',
        exact: true,
        component: ErrorPage
    }
];
