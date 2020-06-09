import {CompUploadForm, Dashboard, ErrorPage} from "../../views/pages/Admin";

const prefix = `/admin`;

export default [
    {
        path: `${prefix}`,
        exact: true,
        component: Dashboard
    },
    {
        path: `${prefix}/comps/upload`,
        exact: true,
        component: CompUploadForm
    },
    {
        path: `${prefix}/*`,
        exact: true,
        component: ErrorPage
    }
];
