import siderWrapper from '../components/SiderWrapper';
import pageWrapper from '../components/PageWrapper';
import Home from './Home';

export default function Test({ match }) {
  const items = [];
  const OperatorSider = siderWrapper(items);
  const routes = [{
    path: `${match.url}/home`,
    component: Home,
  }];
  return pageWrapper(OperatorSider, routes);
}
