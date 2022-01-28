import React from 'react';
import { PageHeader } from 'antd';
import history from 'utils/history';

export default function ({ title }) {
  return <PageHeader onBack={() => history.goBack()} title={title} />;
}
