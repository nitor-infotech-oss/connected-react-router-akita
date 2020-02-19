# Connected React Router Akita

[![Greenkeeper badge](https://badges.greenkeeper.io/nitor-infotech-oss/connected-react-router-akita.svg)](https://greenkeeper.io/)

### A React Router v4/v5 binding with Akita.

This is a mono repo which has 3 packages.

1. [**@nitor-infotech/connected-akita-router-core**](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/core) - A core Package which create a router store and has logic to update and fetch state data.
2. [**@nitor-infotech/connected-akita-router-component**](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/component) -  A Package that provides a HOC Class component which listents to history and update in Akita store. It internally uses [core](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/core) package.
3. [**@nitor-infotech/connected-akita-router-fn-component**](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/hook-component) - It provides a HOC Functional component which uses React Hooks. It listens to history and update in Akita store. It  internally uses [core](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/core) packages methods.

You can directly use either `@nitor-infotech/connected-akita-router-component` or `@nitor-infotech/connected-akita-router-fn-component` in your application to directly integrate React Router with Akita store.

If You wish to manually manage akita store and components go for `@nitor-infotech/connected-akita-router-core`.
