import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

const styles = StyleSheet.create({
  sider: {
    background: '#fff',
  },
  menu: {
    height: '100%',
    borderRight: 0,
  },
});

const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { items } = this.props;
    return (
      <Sider width={220} className={css(styles.sider)}>
        <Menu
          mode="inline"
          className={css(styles.menu)}
        >
          {items.map((item) => (item.type === 'menu-group' ? (
            <SubMenu
              key={item.id}
              title={(
                <span>
                  <Icon type={item.iconType} />
                  <span>{item.title}</span>
                </span>
              )}
            >
              {item.item.map((subItem) => (subItem.type === 'menu-sub-group' ? (
                <SubMenu key={subItem.id} title={subItem.text}>
                  {subItem.item.map((subsubItem) => (
                    <Menu.Item key={subsubItem.id}>
                      <NavLink to={subsubItem.path}>{subsubItem.text}</NavLink>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={subItem.path}>
                  <NavLink to={subItem.path}>{subItem.text}</NavLink>
                </Menu.Item>
              )

              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.path}>
              <NavLink to={item.path}>
                <Icon type={item.iconType} />
                {item.text}
              </NavLink>
            </Menu.Item>
          )))}
        </Menu>
      </Sider>
    );
  }
}

export default SiderWrapper;
