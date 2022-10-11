import CssQuestion from 'pages/CssQuestion';
import Home from 'pages/Home';
import HtmlQuestion from 'pages/HtmlQuestion';
import JavaScriptQuestion from 'pages/JavaScriptQuestion';
import ReactQuestion from 'pages/React';
import { PATHS } from 'types/routes.enum';

const routes = [
  {
    path: PATHS.HTML_PAGES,
    Component: HtmlQuestion,
  },
  {
    path: PATHS.CSS_PAGES,
    Component: CssQuestion,
  },
  {
    path: PATHS.JAVA_SCRIPT_PAGES,
    Component: JavaScriptQuestion,
  },
  {
    path: PATHS.REACT_PAGES,
    Component: ReactQuestion,
  },

  {
    path: PATHS.ROOT,
    Component: Home,
  },
];

export { routes };
