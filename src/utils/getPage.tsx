import Home from 'pages/home';
import Urgencias from 'pages/urgencias';

enum Paths {
  HOME = '/',
  URGENCIAS = '/urgencias',
}

const getPaths = (): Record<string, any> => ({
  [Paths.HOME]: Home,
  [Paths.URGENCIAS]: Urgencias,
});

const getPage = (pathname: string) => {
  const pages = getPaths();
  return pages[pathname];
};

export default getPage;
