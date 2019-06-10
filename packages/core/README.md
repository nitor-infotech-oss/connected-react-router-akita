# Connected React Router Akita Core

A core package for managing React Router state in Akita Store. 

Note: You need to subscribe on getLocation and updateLocation and push data to akita store.

### Installation

_____


    npm install --save @nitor-infotech/connected-akita-router-core


### Usage

_____

**1. initialize()**
This method initialize router store with initial history object which we pass as an argument to this method.

	import { routerStore } from '@nitor-infotech/connected-akita-router-core';
	
    export default class App extends React.Component {
      constructor(props) {
        super(props);
        routerStore.initialize(history)
      }
      public render() {
        return (
          <div className="App">
    		// Your code goes here
          </div>
        );
      }
    };

**2. getLocation()**:

    	import { routerStore } from '@nitor-infotech/connected-akita-router-core';
		class App extends Component {
    		constructor() {
    			const routerQuery = routerStore.getQuery(); // Do not call outside class or functional component;
    			this.unSubscribeLocation = routerQuery.getLocation().subscribe(location => {
    			// Location will return
    			const { pathname, search, hash } = location;
    		}
    	}

**3. updateLocation()**:

    	import { routerStore } from '@nitor-infotech/connected-akita-router-core';
    	
		const location = {
        pathname: "Some Pathname";
        search: "some query params";
        hash: "Some Hash";
  	  }
	  	const action  = 'PUSH' //action types can be 'PUSH' | 'POP' | 'REPLACE';
    
    	this.routerService = routerStore.getService(); // Do not call outside class or functional component
    
    	this.routerService.updateLocation({location, action})

