import {GetMonthlyPic} from "./services/Gallery"
import {Layout} from "./Layout/Layout";

const AppRoutes = [
    {
        index: true,
        element: <Layout />
    },
    {
        path: '/Gallery',
        element: <GetMonthlyPic />
    },

    ]

export default AppRoutes;