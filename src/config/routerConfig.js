import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import DetailsLayout from "../layout/DetailsLayout/DetailsLayout";
import Details from "../pages/Details";
import Home from "../pages/Home/Home";

const configRouter = [
    {path: '/', component: Home, layout: DefaultLayout},
    {path: '/details/:q/:days/:date_epoch', component: Details, layout: DetailsLayout}
]

export default configRouter