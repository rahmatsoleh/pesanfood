import Home from "../views/pages/home";
import Favorite from "../views/pages/favorite";
import Detail from "../views/pages/detail";
import Category from "../views/pages/category";
import CulinarPage from "../views/pages/culinarPage";

const routes = {
    '/' : Home,
    '/home' : Home,
    '/favorite' : Favorite,
    '/detail/:id' : Detail,
    '/category/:id' : Category,
    '/culinary/:id' : CulinarPage,
}

export default routes;