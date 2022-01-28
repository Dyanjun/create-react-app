import pageWrapper from '../components/PageWrapper';
import Home from './Home';

export default function Test({ match }) {
  const items = [{
    id: 1,
    type: 'menu-group',
    iconType: 'edit',
    title: '测试目录',
    item: [
      {
        id: 1.1,
        path: '/home',
        text: '测试小节1',
      },
    ],
  }];
  const routes = [{
    path: `${match.url}/home`,
    component: Home,
  }];
  return pageWrapper(items, routes);
}
