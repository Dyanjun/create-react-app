import pageWrapper from '../../components/PageWrapper';
import TestPage from './TestPage';

const routes = (match) => [{
  key: 'page',
  path: `${match.url}/test_page`,
  component: TestPage,
}];

export default function Test({ match }) {
  const items = [{
    id: 1,
    type: 'menu-group',
    iconType: 'edit',
    title: '测试目录',
    item: [
      {
        id: 1.1,
        path: `${match.url}/test_page`,
        text: '测试小节1',
      },
    ],
  }];
  const r = routes(match);
  return pageWrapper(items, r);
}
