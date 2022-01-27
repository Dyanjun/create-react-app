import React from 'react';
import {
  Layout,
} from 'antd';
import { StyleSheet, css } from 'aphrodite';
import { Route } from 'react-router-dom';
import TitleBar from './TitleBar';
import Footer from './Footer';
import SiderWrapper from './SiderWrapper';

const styles = StyleSheet.create({
  layout: {
    minHeight: '100vh',
  },
  content: {
    padding: '12px 24px 24px 24px',
  },
  mainContent: {
    padding: 24,
    marginTop: 12,
    minHeight: 280,
  },
});

const { Content } = Layout;

export default function pageWrapper(items, routes) {
  // const token = getToken();
  // if (token == null) {
  //   return history.go('/');
  // }
  return (
    <Layout className={css(styles.layout)}>
      <TitleBar />
      <Layout>
        <SiderWrapper items={items} />
        <Layout className={css(styles.content)}>
          <Content className={css(styles.mainContent)}>
            {routes.map((route) => (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={route.path}
              />
            ))}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
}
