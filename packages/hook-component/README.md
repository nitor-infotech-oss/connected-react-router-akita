# Connected React Router Akita Functional Component

### A React Router v4/v5 binding with Akita.

### Package provides a wrapper Functional Component which listens on history and update to Akita store. It  internally uses [core](https://github.com/nitor-infotech-oss/connected-react-router-akita/tree/master/packages/core) packages methods.


### Installation

_____

It requires **React 16.8 or later**
  
    npm install --save @nitor-infotech/connected-akita-router-fn-component

### Usage

_____

**1.**

In main index file

- Create a history object
- Provide the created history object to `routerStore.initialize` method
- Wrap your react-router v4/v5 routing with  `ConnectedRouter`  and pass the  `history`  object as a prop. Remember to delete any usage of  `BrowserRouter`  or  `NativeRouter`  as leaving this in will  [cause](https://github.com/supasate/connected-react-router/issues/230#issuecomment-461628073)  [problems](https://github.com/supasate/connected-react-router/issues/230#issuecomment-476164384)  synchronising the state.

		import { createBrowserHistory } from 'history';
		import { ConnectedRouter, routerStore} from  '@nitor-infotech/connected-akita-router-fn-component'

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
**2. **

  - **getLocation()**:

    	import { routerStore } from '@nitor-infotech/connected-akita-router-fn-component';
		class App extends Component {
    		constructor() {
    			const routerQuery = routerStore.getQuery(); // Do not call outside class or functional component;
    			this.unSubscribeLocation = routerQuery.getLocation().subscribe(location => {
    			// Location will return
    			const { pathname, search, hash } = location;
    		}
    	}

- **updateLocation()**:

    	import { routerStore } from '@nitor-infotech/connected-akita-router-fn-component'
    	
		const location = {
        pathname: "Some Pathname";
        search: "some query params";
        hash: "Some Hash";
  	  }
	  	const action  = 'PUSH' //action types can be 'PUSH' | 'POP' | 'REPLACE';
    
    	this.routerService = routerStore.getService(); // Do not call outside class or functional component
    
    	this.routerService.updateLocation({location, action})
