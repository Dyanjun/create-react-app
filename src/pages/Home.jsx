import React from 'react';
import { Layout } from 'antd';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  layout: {
    padding: '24px 24px 24px 24px',
  },
  content: {
    background: '#fff',
    padding: 24,
    margin: 0,
    minHeight: 280,
  },
});

const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <Layout className={css(styles.layout)}>
        <Content className={css(styles.content)}>
          这里是home页
        </Content>
      </Layout>
    </Layout>
  );
}
