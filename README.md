# Connected React Router Akita

### A React Router v4/v5 binding with Akita.

This is a mono repo which has 3 packages.

1. [**@nitor-infotech/connected-akita-router-core**](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/core) - A core Package which create a router store and has logic to update and fetch state data.
2. [**@nitor-infotech/connected-akita-routercomponent**](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/component) -  A Package that provides a HOC Class component which listents to history and update in Akita store. It uses internally uses [core](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/core) package.
3. [**@nitor-infotech/connected-akita-router-fn-component**](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/hook-component) - It provides a HOC Functional component which uses React Hooks. It listens to history and update in Akita store. It  internally uses [core](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/core) packages methods.

### Installation

_____
If you want to use old school class based component you can install:

    npm install --save @nitor-infotech/connected-akita-router-component

  or
  If you want to use React Hook version. It requires **React 16.8 or later**
  
    npm install --save @nitor-infotech/connected-akita-router-fn-component

### Usage

_____

**1. Usage will be similar for both `@nitor-infotech/connected-akita-router-component` and `@nitor-infotech/connected-akita-router-fn-component`**

In main index file

- Create a history object
- Provide the created history object to `routerStore.initialize` method
- Wrap your react-router v4/v5 routing with  `ConnectedRouter`  and pass the  `history`  object as a prop. Remember to delete any usage of  `BrowserRouter`  or  `NativeRouter`  as leaving this in will  [cause](https://github.com/supasate/connected-react-router/issues/230#issuecomment-461628073)  [problems](https://github.com/supasate/connected-react-router/issues/230#issuecomment-476164384)  synchronising the state.

		import { createBrowserHistory } from 'history';
		import { ConnectedRouter} from  '@nitor-infotech/connected-akita-router-component'; // if you want to use class based component
		import { ConnectedRouter} from  '@nitor-infotech/connected-akita-router-fn-component' // when you want to use functional component based on React hooks
		import { routerStore } from  '@nitor-infotech/connected-akita-router-core';

		const  history  =  createBrowserHistory();

		export  default  class  App  extends  React.Component {
		  constructor(props) {
			super(props);
			routerStore.initialize(history)
		  }
		  render() {
			return (
			  <div className="App">
				<ConnectedRouter history={history} >
				  <Switch>
					<Route path="/page2" component={Page2} />
					<Route path="/" component={Page1} />
				  </Switch>
				</ConnectedRouter>
			  </div>
			);
		  }
	  };  
**2. Core**

  If you want to manually update or subscribe to router state then core package provides methods for it.

  - **getLocation()**:

    	import { routerStore } from '@nitor-infotech/connected-akita-router-core';
		class App extends Component {
    		constructor() {
    			const routerQuery = routerStore.getQuery(); // Do not call outside class or functional component;
    			this.unSubscribeLocation = routerQuery.getLocation().subscribe(location => {
    			// Location will return
    			const { pathname, search, hash } = location;
    		}
    	}

- **updateLocation()**:

    	import { routerStore } from '@nitor-infotech/connected-akita-router-core';
    	
		const location = {
        pathname: "Some Pathname";
        search: "some query params";
        hash: "Some Hash";
  	  }
	  	const action  = 'PUSH' //action types can be 'PUSH' | 'POP' | 'REPLACE';
    
    	this.routerService = routerStore.getService(); // Do not call outside class or functional component
    
    	this.routerService.updateLocation({location, action})
