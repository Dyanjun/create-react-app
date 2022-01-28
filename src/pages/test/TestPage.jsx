import React from 'react';
import { Table } from 'antd';
import { withRouter } from 'react-router-dom';
import HeaderWithBack from '../../components/HeaderWithBack';

class TestPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: [{
        name: 'www', id: '1', owner: 'ddd', status: 'sss',
      }],
    });
  }

  render() {
    const { dataSource } = this.state;
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '创建人',
        dataIndex: 'owner',
        key: 'owner',
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
      },
    ];
    return (
      <>
        <HeaderWithBack title="测试小节1" />
        <Table
          columns={columns}
          dataSource={dataSource}
          size="middle"
          rowKey="id"
        />
      </>
    );
  }
}

export default withRouter(TestPage);
