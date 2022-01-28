## 1、运行

npm install

npm run start/npm start

项目运行在3000端口（默认），可在浏览器中查看

## 2、相关文件说明

- src：

  - api： 后端请求接口

  - components：自定义可复用的组件

    现已有Footer（页脚）、HeaderWithBack（组件路由返回）、PageWrapper（组件路由控制）、SiderWrapper（侧边菜单）、TitleBar（页眉）

  - pages：自定义页面

    现已有Home（主页面测试），Test（菜单跳转测试），可进入'localhost:3000/test'查看。可根据业务需要增删改，

  - mock：模拟后端返回数据

  - redux：多组件间共享状态

  - utils：工具类

    - history：浏览历史管理
    - token：用户JWT管理

  - router：路由管理

    现已有Home和Test用于路由测试

  - app：应用入口

  - index：应用启动程序

- public：浏览页标题、logo等静态配置

- package.json：一般不需要手动修改，在npm安装依赖包时会自动修改

- package-lock.json： 不需要手动修改
- eslintrc.json：代码风格和语法的检查规则

## 3、相关依赖版本说明

项目相关依赖版本在package.json中有详细记录，在npm install时，很容易发生版本冲突，请根据具体报错手动更改依赖的版本。

**package.json中未包含的、初始化时使用的版本有：[不一定需要完全一样， 仅供参考]**

- npm 8.3.2
- node 16.13.2
- webpack 4.44.2
- webpack-cli 4.9.2

## 4、重要工具说明

- antd：组件库，现在使用的时3.x版本，与4.x版本有较多差异，请谨慎升级
- redux：状态管理器，多组件共享状态时，尽量使用store
- eslint：代码风格和语法检测工具
- mock：数据模拟

## 5、create-react-app

本项目使用create-react-app 5.0.0手脚架进行创建，相关内容可查看README-CRA

尽量不要使用npm run eject暴露webpack环境配置，该操作不可逆

