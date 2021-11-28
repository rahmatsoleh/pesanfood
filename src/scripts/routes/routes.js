import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Category from '../views/pages/category';
import CulinarPage from '../views/pages/culinarPage';
import ListPage from '../views/pages/listPage';
import About from '../views/pages/about';

const routes = {
  '/': Home,
  '/home': Home,
  '/list': ListPage,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/category/:id': Category,
  '/culinary/:id': CulinarPage,
  '/about': About,
};

export default routes;