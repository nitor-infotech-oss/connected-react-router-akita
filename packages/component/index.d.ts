
declare module '@nitor-infotech/connected-akita-router-component' {
  import * as React from 'react';
  import { ReactChild, Component } from 'react';
  import { Subscription } from "rxjs";
  import { History, Location, Action } from 'history';
  import { Store, Query } from '@datorama/akita';
 
  interface IConnectedRouterProps {
    history: History;
    children: ReactChild;
  }
  export class ConnectedRouter extends Component<IConnectedRouterProps, {}> {
    inTimeTravelling: boolean;
    unSubscribeLocation: Subscription;
    unlisten: () => void;
    constructor(props: IConnectedRouterProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
  }

  export interface IRouterState {
    location: Location;
    action: Action;
  }

  export const createInitialRoute: (history: History) => IRouterState;

  export class RouterRootStore extends Store<IRouterState> {
    constructor(history: History);
  }
  export class RouterStore {
    private routerService;
    private routerQuery;
    initialize(initialState: History): void;
    getQuery(): RouterQuery;
    getService(): RouterService;
  }
  export class RouterService {
    private store;
    constructor(store: RouterRootStore);
    updateLocation: (params: any) => void;
  }

  export class RouterQuery extends Query<IRouterState> {
    protected store: RouterRootStore;
    constructor(store: RouterRootStore);
    getLocation: () => import('rxjs').Observable<Location<any>>;
  }

  export const routerStore: RouterStore;

}