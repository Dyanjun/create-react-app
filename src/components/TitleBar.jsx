import React from 'react';
import {
  Layout, Button,
} from 'antd';
import { StyleSheet, css } from 'aphrodite';
import {
  // getToken, getUsername, clearToken,
  getToken,
} from '../utils/token';
import history from '../utils/history';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
  },
});

const title = '低代码平台';

const { Header } = Layout;

export default function () {
  const token = getToken();
  return (
    <Header className={css(styles.header)}>
      <h2 className={css(styles.title)}>
        {title}
      </h2>
      {
        token == null ? null : (
          <>
            <Button
              icon="user"
              type="link"
              onClick={() => {
                history.push('profile');
              }}
            >
              {/* {getUsername(getToken())} */}
            </Button>
            <Button
              icon="logout"
              type="link"
              onClick={() => {
                // clearToken();
                history.replace('/');
              }}
            >
              登出
            </Button>
          </>
        )
      }
    </Header>
  );
}
