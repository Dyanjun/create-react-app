import React from 'react';
import { PageHeader } from 'antd';
import history from '../utils/history';

export default function HeaderWithBack({ title }) {
  return <PageHeader onBack={() => history.goBack()} title={title} />;
}
